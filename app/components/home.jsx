"use client";
import { useEffect, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

export const Homepage = () => {
  const [message, setMessages] = useState("");
  const [chat, setChat] = useState([])
  const [isTyping, setTyping] = useState(false)

 // 👇 reference to chat container
  const chatEndRef = useRef(null);

  // 👇 auto scroll whenever chat updates
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chat, isTyping]);

const createChat = async(e) => {
  try{
    e.preventDefault()
    setChat((prev) => [
    ...prev,
    {
      sender: "me",
      message: message,
      createdAt: new Date(),
    },
  ]);

  // Custom introduction check
    const lowerMessage = message.toLowerCase();
    if (
      lowerMessage.includes("your name") ||
      lowerMessage.includes("who are you") ||
      lowerMessage.includes("more about yourself")
    ) {
      setChat((prev) => [
        ...prev,
        {
          sender: "ai",
          message: "My name is connectAI, how may I help you?",
          createdAt: new Date(),
        },
      ]);
      setMessages(""); // clear input
      return;
    }
    setTyping(true)
    const payload = {
      contents: {
        parts: {
          text: message
        }
      }
    }
    const options = {
      headers: {
        "X-goog-api-key": process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
      }
    }
    const {data} = await axios.post("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent", payload, options)
    const aiResultRaw = data.candidates[0].content.parts[0].text
    
    // Strip Markdown symbols
const aiResult = aiResultRaw
  .replace(/\*\*(.*?)\*\*/g, "$1") // remove bold
  .replace(/\*(.*?)\*/g, "$1")     // remove italics
  .replace(/`{1,3}(.*?)`{1,3}/g, "$1"); // remove inline code blocks
    setChat((prev) => [
    ...prev,
    {
      sender: "ai",
      message: aiResult,
      createdAt: new Date(),
    },
  ]);
  }
  catch(err){
    toast.error(err.message)
  }
  finally{
    setTyping(false)
  }
}
  
  return (
    <section className="min-h-screen mt-10">
      {/* Hero Text */}
      <div className="w-9/12 py-12 flex flex-col justify-center items-center bg-white/30 rounded-2xl
      max-w-4xl mx-auto p-4">
        <div className="bg-blue-800 w-fit h-fit p-1.5 rounded-2xl">
            <h1 className="h1-text bg-gradient-to-r from-blue-50 via-blue-200 to-white bg-clip-text text-transparent animate-gradient">Chat With AI</h1>
        </div>
        
        {/* form section */}
        
        {/* chat section */}
        <div className="min-h-160 w-full">
          {/* Chat section */}
{/* Chat section */}
<div className="h-[600px] w-full overflow-y-auto rounded-lg p-4">
  {chat?.map((item, index) => (
    <div key={index} className="mt-4 w-11/12 text">
      {item.sender === "me" && (
        <div className="flex flex-col gap-2 justify-start animate__animated animate__fadeIn">
          <div className="text-sm md:text-[1.5rem] px-6 py-3 bg-rose-100 w-fit rounded-xl text-black">
            {item.message}
          </div>
        </div>
      )}

      {item.sender === "ai" && (
        <div className="flex flex-col gap-2 items-end animate__animated animate__fadeIn">
          <div className="flex justify-center items-center">
            <div className="text-sm md:text-[1.5rem] px-6 py-3 bg-green-100 w-fit rounded-xl text-black">
              {item.message}
            </div>
          </div>
        </div>
      )}
    </div>
  ))}

  {/* Typing indicator */}
  {isTyping && (
    <div className="flex justify-end w-11/12 mt-4">
      <small className="text-sm md:text-[1rem] font-medium text-gray-500 animate__animated animate__fadeIn">
        Typing...
      </small>
    </div>
  )}

  {/* 👇 Invisible div to scroll into */}
  <div ref={chatEndRef} />
</div>

        </div>
        

        {/* chat section ends here */}

        {/* form section */}
<div className="w-full mt-4">
  <form onSubmit={createChat} className="flex items-center gap-3">
    <input
      required
      placeholder="Type your message..."
      value={message}
      onChange={(e) => setMessages(e.target.value)}
      className="flex-1 px-4 py-3 rounded-2xl border border-gray-300 bg-white shadow-sm 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                 text-gray-800 placeholder-gray-400 transition text"
    />
    <button
      type="submit"
      className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-medium shadow-md 
                 hover:bg-blue-700 active:scale-95 transition-all text"
    >
      Send
    </button>
  </form>
</div>


        {/* form section ends */}
      </div>
      <ToastContainer />
    </section>
  );
}
