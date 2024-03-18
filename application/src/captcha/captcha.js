import React, { useEffect, useRef } from 'react';

const Captcha = ({ setCaptchaText }) => { 
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const newCaptcha = generateCaptcha();
    setCaptchaText(newCaptcha);
    drawCaptcha(ctx, newCaptcha);
  }, [setCaptchaText]);

  function generateCaptcha() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += chars[Math.floor(Math.random() * chars.length)];
    }
    return captcha;
  }

  function drawCaptcha(ctx, text) {
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    ctx.font = '24px Arial';
    ctx.fillStyle = '#0D47A1';
    ctx.fillText(text, canvasRef.current.width / 2, canvasRef.current.height / 1.5);
  }

  return <canvas ref={canvasRef} width="200" height="30" />;
};

export default Captcha;
