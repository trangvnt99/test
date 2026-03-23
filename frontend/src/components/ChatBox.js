// import { useState, useEffect, useRef } from "react";

// const Chatbox = () => {
//   const [isChatOpen, setIsChatOpen] = useState(false);
//   const [userInput, setUserInput] = useState("");
//   const [chatHistory, setChatHistory] = useState([
//     {
//       type: "bot",
//       text: "Chào bạn! Tôi là tư vấn viên AI của DITAGIS. Tôi có thể hỗ trợ gì cho bạn về giải pháp GIS không?",
//     },
//   ]);

//   const chatEndRef = useRef(null);

//   const scrollToBottom = () => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     if (isChatOpen) {
//       scrollToBottom();
//     }
//   }, [chatHistory, isChatOpen]);

//   const scenario = {
//     price: {
//       question: "Báo giá phần mềm ArcGIS",
//       answer:
//         "DITAGIS cung cấp các gói bản quyền ArcGIS đa dạng. Bạn vui lòng liên hệ hotline 0985769686 để nhận báo giá chi tiết nhé!",
//     },
//     digitize: {
//       question: "Tư vấn dịch vụ số hóa bản đồ",
//       answer:
//         "Chúng tôi chuyên cung cấp dịch vụ số hóa dữ liệu GIS, xây dựng cơ sở dữ liệu không gian. Bạn cần tư vấn cho dự án cụ thể nào không?",
//     },
//     other: {
//       question: "Tôi có câu hỏi khác",
//       answer:
//         "Vâng, bạn có thể gửi email về mtho1806@gmail.com, chúng tôi sẽ phản hồi ngay!",
//     },
//   };

//   const handleChatOption = (key) => {
//     const selected = scenario[key];
//     setChatHistory((prev) => [
//       ...prev,
//       { type: "user", text: selected.question },
//       { type: "bot", text: selected.answer },
//     ]);
//   };

//   const handleSendMessage = (e) => {
//     e.preventDefault();
//     if (!userInput.trim()) return;

//     const currentInput = userInput;
//     setChatHistory((prev) => [...prev, { type: "user", text: currentInput }]);
//     setUserInput("");

//     setTimeout(() => {
//       setChatHistory((prev) => [
//         ...prev,
//         {
//           type: "bot",
//           text: `Cảm ơn bạn! Chúng tôi đã nhận được thông tin về: "${currentInput}". Tư vấn viên sẽ phản hồi bạn sớm nhất.`,
//         },
//       ]);
//     }, 1000);
//   };

//   return (
//     <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
//       {isChatOpen && (
//         <div className="bg-white w-[320px] mb-4 rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300">
//           {/* Header */}
//           <div className="bg-blue-600 p-4 text-white flex justify-between items-center font-bold shadow-lg">
//             <div className="flex items-center gap-2">
//               <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//               <span className="text-sm">DITAGIS Assistant</span>
//             </div>
//             <button
//               onClick={() => setIsChatOpen(false)}
//               className="hover:scale-110 transition-transform text-xl"
//             >
//               ✕
//             </button>
//           </div>

//           {/* Chat History */}
//           <div className="h-[280px] overflow-y-auto p-4 flex flex-col gap-3 bg-slate-50">
//             {chatHistory.map((chat, i) => (
//               <div
//                 key={i}
//                 className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm ${
//                   chat.type === "bot"
//                     ? "bg-white text-slate-700 self-start border border-slate-100"
//                     : "bg-blue-600 text-white self-end"
//                 }`}
//               >
//                 {chat.text}
//               </div>
//             ))}
//             <div ref={chatEndRef} />
//           </div>

//           {/* Quick Options */}
//           <div className="p-2 bg-white flex gap-2 overflow-x-auto no-scrollbar border-t border-slate-50">
//             {Object.keys(scenario).map((key) => (
//               <button
//                 key={key}
//                 onClick={() => handleChatOption(key)}
//                 className="whitespace-nowrap text-[10px] bg-slate-50 hover:bg-blue-50 hover:text-blue-600 px-3 py-1 rounded-full border border-slate-200 transition-all font-semibold"
//               >
//                 {scenario[key].question}
//               </button>
//             ))}
//           </div>

//           {/* Input Form */}
//           <form
//             onSubmit={handleSendMessage}
//             className="p-3 bg-white border-t border-slate-100 flex gap-2"
//           >
//             <input
//               type="text"
//               value={userInput}
//               onChange={(e) => setUserInput(e.target.value)}
//               placeholder="Nhập câu hỏi..."
//               className="flex-1 text-sm bg-slate-100 border-none focus:ring-2 focus:ring-blue-500 rounded-xl px-4 py-2 outline-none"
//             />
//             <button
//               type="submit"
//               className="bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700 transition-colors"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="18"
//                 height="18"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <line x1="22" y1="2" x2="11" y2="13"></line>
//                 <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
//               </svg>
//             </button>
//           </form>
//         </div>
//       )}

//       {/* Main Toggle Button */}
//       <button
//         onClick={() => setIsChatOpen(!isChatOpen)}
//         className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-90 ${
//           isChatOpen ? "bg-slate-800 rotate-90" : "bg-blue-600"
//         }`}
//       >
//         {isChatOpen ? (
//           <span className="text-xl">✕</span>
//         ) : (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="28"
//             height="28"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
//           </svg>
//         )}

//         {/* Notification Badge */}
//         {!isChatOpen && (
//           <span className="absolute -top-1 -right-1 flex h-5 w-5">
//             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
//             <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 border-2 border-white"></span>
//           </span>
//         )}
//       </button>
//     </div>
//   );
// };

// export default Chatbox;
import React, { useEffect } from "react";

const ChatBox = () => {
  useEffect(() => {
    // Nhúng Script Tawk.to
    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    // Dùng link mới nhất của bạn (kết thúc bằng 1jjqpok5k)
    s1.src = "https://embed.tawk.to/69b7b55357e0e61c384f2d66/1jjqpok5k";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    window.Tawk_API.onLoad = function () {
      // Ẩn nút mặc định của Tawk.to
      window.Tawk_API.hideWidget();
    };
  }, []);

  const toggleChat = () => {
    // Kiểm tra xem Tawk_API và hàm maximize đã tồn tại chưa trước khi gọi
    if (window.Tawk_API && typeof window.Tawk_API.maximize === "function") {
      if (
        window.Tawk_API.isChatMinimized &&
        window.Tawk_API.isChatMinimized()
      ) {
        window.Tawk_API.maximize();
      } else {
        // Nếu không có hàm isChatMinimized hoặc đang mở, thì cứ ra lệnh maximize/toggle
        window.Tawk_API.maximize();
      }
    } else {
      console.log("Tawk.to chưa tải xong, vui lòng đợi xíu nhé!");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <button
        onClick={toggleChat}
        className="w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-white bg-blue-600 hover:scale-110 transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
        </svg>
      </button>
    </div>
  );
};

export default ChatBox;
