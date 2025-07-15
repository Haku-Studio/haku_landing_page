// import React from "react";

// const Project = ({ imageSRC, content }) => {
//   return (
//     <div
//       onClick={() => {
//         if (swiperRef.current) {
//           // Inverse le sens : clique sur un slide à droite => va à gauche, et vice versa
//           const currentIndex = swiperRef.current.realIndex;
//           const totalSlides = items.length;
//           let targetIndex;
//           if (index > currentIndex) {
//             // Normalement va à droite, donc on va à gauche
//             targetIndex =
//               (currentIndex - (index - currentIndex) + totalSlides) %
//               totalSlides;
//           } else if (index < currentIndex) {
//             // Normalement va à gauche, donc on va à droite
//             targetIndex = (currentIndex + (currentIndex - index)) % totalSlides;
//           } else {
//             targetIndex = currentIndex;
//           }
//           swiperRef.current.slideToLoop(targetIndex);
//         }
//       }}
//       className={`relative shadow-lg transition-all duration-500 ease-in-out overflow-hidden 
//                   ${
//                     isActive
//                       ? "hover:rounded-2xl 15"
//                       : "scale-75 cursor-pointer opacity-60 rounded-none"
//                   } 
//                   h-[250px]# w-[215px]# lg:h-[600px] lg:w-full`}
//     >
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url(${item.imageSRC})` }}
//       ></div>
//       <div className="relative z-10 p-4">
//         <h1 className="text-xl lg:text-2xl drop-shadow-md">{item.content}</h1>
//       </div>
//     </div>
//   );
// };

// export default Project;
