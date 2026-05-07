"use client";

import { useReveal } from "./useReveal";

/**
 * Componente cliente minimal cuya única responsabilidad es
 * inicializar el IntersectionObserver de animaciones de entrada.
 *
 * Separa la lógica de animación de los componentes de presentación,
 * que permanecen como Server Components.
 */
export default function BautyRevealInit() {
  useReveal();
  return null;
}
