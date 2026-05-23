import { academyConfig } from "@/lib/academy";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-container text-center text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} {academyConfig.name}. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
}
