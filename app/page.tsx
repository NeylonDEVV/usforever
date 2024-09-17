'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [activeMessage, setActiveMessage] = useState('');

  const messages = [
    'Obrigado por ter entrado na minha vida, voce é um presente de Deus pra mim!',
    'Prometo ser o mais atencioso possivel com você e estar nos momentos dificeis',
    'quero ser o Homem da sua vida, sou seu apenas seu e que assim seja !',
    'Amo seu jeito, eu te amo, voce é linda por dentro e por fora, tudo em voce seus defeitos e qualidade te tornam a mulher da minha vida!',
    'Não vejo a hora de te ver e a gente aproveitar cada segundo juntos, acordar e durmir juntinhos!',
    'Aqui eu declaro meu amor eterno por você!'
  ];

  const handleHeartClick = (message: string) => {
    setActiveMessage(message);
  };

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-6">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-pink-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Surpresaaa 🎁
        </motion.h1>
        <p className="text-xl md:text-1xl font-semibold text-pink-600">
          Um pequeno presente pra lembrar de mim é a primeira versão mas né kkk
        </p>

        <motion.div
          className="text-3xl md:text-5xl text-red-500 font-semibold mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
        >
          {["t", "e", " ", "a", "m", "o", " ", "E", "d", "u", "a", "r", "d", "a", " ", "❤"].map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 1, duration: 0.5 }}
            >
              {letter}
            </motion.span>

          ))}
        </motion.div>
      </div>

      <div className="text-center mb-6">
        <p className="text-xl md:text-2xl font-semibold text-pink-600">
          {activeMessage}
        </p>

      </div>

      <h1 className="text-md md:text-6xl font-bold text-pink-600 mb-8">Ah clica em algum coração</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-lg shadow-lg cursor-pointer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.2 + 3, duration: 0.5 }}
            onClick={() => handleHeartClick(messages[i])}
          >
            <motion.div
              className="text-6xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                delay: i * 0.3
              }}
            >
              ❤️
            </motion.div>
          </motion.div>
        ))}
      </div>
      <h1 className="text-md mt-2 text-center md:text-6xl font-bold text-pink-600 mb-8">Aqui em breve nosso album de fotos</h1>
    </div>
  );
}
