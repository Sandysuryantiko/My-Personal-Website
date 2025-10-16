// import React, { useState, useEffect } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
// import { motion, AnimatePresence } from "framer-motion";

// const Popup3D = () => {
//   const [show, setShow] = useState(false);
//   const [exitAnim, setExitAnim] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setShow(true), 500);
//     return () => clearTimeout(timer);
//   }, []);

//   // Trigger exit animation
//   const handleClose = () => {
//     setExitAnim(true);
//   };

//   // Variants for overlay (fade in/out)
//   const overlayVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 },
//     exit: { opacity: 0, transition: { duration: 0.4 } },
//   };

//   // For the popup container: when exitAnim true the container will
//   // run a short 'shake' sequence then shrink+fade.
//   const containerAnimate = exitAnim
//     ? {
//         // sequence: slight pop/overshoot -> shake -> shrink+fade
//         scale: [1, 1.05, 0.0],
//         rotate: [0, -4, 4, -4, 4, 0], // small shake
//         opacity: [1, 1, 0],
//       }
//     : { scale: 1, rotate: 0, opacity: 1 };

//   return (
//     <AnimatePresence>
//       {show && (
//         <motion.div
//           className="fixed inset-0 flex items-center justify-center bg-black/60 z-50"
//           variants={overlayVariants}
//           initial="hidden"
//           animate="visible"
//           exit="exit"
//         >
//           <motion.div
//             // container that will animate (shake -> shrink)
//             className="w-[550px] h-[550px] bg-transparent rounded-full overflow-visible relative flex items-center justify-center"
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={containerAnimate}
//             transition={{ duration: 0.9, ease: "easeInOut" }}
//             onAnimationComplete={() => {
//               // when exit animation finished, unmount popup
//               if (exitAnim) {
//                 setShow(false);
//                 setExitAnim(false);
//               }
//             }}
//           >
//             {/* Canvas with only the sphere (no white box) */}
//             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//               <div className="w-[420px] h-[420px]">
//                 <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
//                   <ambientLight intensity={0.6} />
//                   <directionalLight position={[2, 2, 2]} intensity={1} />
//                   <OrbitControls enableZoom={false} enablePan={false} />
//                   {/* Large sphere */}
//                   <Sphere args={[1, 128, 128]} scale={2.3}>
//                     <MeshDistortMaterial
//                       color="#1d4ed8"
//                       distort={0.45}
//                       speed={2}
//                       roughness={0.2}
//                     />
//                   </Sphere>
//                 </Canvas>
//               </div>
//             </div>

//             {/* Text & Enter button (on top of sphere) */}
//             <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 pointer-events-auto">
//               <h1 className="text-4xl font-bold text-white drop-shadow-lg select-none">
//                 Welcome 🚀
//               </h1>
//               <p className="text-white/90 mt-3 mb-6 drop-shadow-md text-lg select-none">
//                 Selamat datang di portfolio saya!
//               </p>

//               <button
//                 onClick={handleClose}
//                 className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-500 active:scale-95 transition"
//               >
//                 Lanjut
//               </button>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default Popup3D;
