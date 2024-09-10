"use client"

import React, { useEffect } from 'react';
import * as THREE from 'three';

// Определяем типы для переменных
const ThreeScene: React.FC = () => {
  useEffect(() => {
    // Создаем сцену
    const scene = new THREE.Scene();
    // Создаем камеру
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    // Создаем рендерер
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    const container = document.getElementById('three-container');
    if (container) {
      container.appendChild(renderer.domElement);
    }

    // Создаем простую геометрию куба
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);

    // Добавляем куб в сцену
    scene.add(cube);

    // Устанавливаем позицию камеры
    camera.position.z = 5;

    // Анимационный цикл
    const animate = () => {
      requestAnimationFrame(animate);

      // Поворачиваем куб
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      // Отображаем сцену
      renderer.render(scene, camera);
    };

    // Запускаем анимацию
    animate();

    // Обработка изменения размера окна
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    };

    // Добавляем обработчик события изменения размера окна
    window.addEventListener('resize', handleResize);

    // Очистка сцены Three.js при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
      // Удаляем canvas из DOM
      if (container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []); // Пустой массив зависимостей означает, что useEffect выполнится только при монтировании

  return <div id="three-container" />;
};

export default ThreeScene;
