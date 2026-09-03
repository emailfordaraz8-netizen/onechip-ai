import React from "react";
import { Link } from "react-router-dom";

const footerLinks = {
  navigation: [
    { label: "Systems", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Process", href: "/process" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "AI Agents", href: "/services/ai-agents" },
    { label: "AI Automation", href: "/services/ai-automation" },
    { label: "AI Chatbots", href: "/services/ai-chatbots" },
    { label: "Workflow Automation", href: "/services/workflow-automation" },
    { label: "AI Integrations", href: "/services/ai-integrations" },
    { label: "Custom AI Systems", href: "/services/custom-ai-systems" },
  ],
};

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#020807] border-t border-[rgba(70,150,125,0.1)]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#35F2B0] animate-pulse" />
              <span className="font-semibold text-[#F0F7F4] tracking-wider text-sm">
                ONECHIP<span className="text-[#35F2B0]">.AI</span>
              </span>
            </div>
            <p className="text-[#8EA8A0] text-sm leading-relaxed mb-6">
              AI systems for modern business.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] tracking-widest uppercase text-[#49655D] hover:text-[#35F2B0] transition-colors"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] tracking-widest uppercase text-[#49655D] hover:text-[#35F2B0] transition-colors"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#49655D] mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-[#8EA8A0] hover:text-[#35F2B0] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#49655D] mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-[#8EA8A0] hover:text-[#35F2B0] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#49655D] mb-6">
              Contact
            </h3>
            <a
              href="mailto:onechipai@gmail.com"
              className="text-sm text-[#8EA8A0] hover:text-[#35F2B0] transition-colors block mb-4"
            >
              onechipai@gmail.com
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] uppercase px-4 py-2 border border-[rgba(53,242,176,0.25)] text-[#35F2B0] hover:bg-[#35F2B0] hover:text-[#020807] transition-all duration-300 text-xs"
            >
              Start a Project →
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(70,150,125,0.08)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#49655D]">
            ONECHIP.AI / INTELLIGENT SYSTEMS / © 2026
          </div>
          <div className="flex items-center gap-3">
            <span className="w-1 h-1 rounded-full bg-[#35F2B0] animate-pulse" />
            <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-[#49655D]">
              SYSTEM / ONLINE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
