import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  description,
  children,
  className = "",
  align = "left",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <section className={`py-20 md:py-28 ${className}`}>
      <div className="container-pro">
        {(eyebrow || title || description) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`max-w-3xl mb-14 ${align === "center" ? "mx-auto text-center" : ""}`}
          >
            {eyebrow && (
              <div className={`inline-flex items-center gap-2 mb-5 ${align === "center" ? "" : ""}`}>
                <span className="h-px w-8 bg-accent" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {eyebrow}
                </span>
              </div>
            )}
            {title && (
              <h2 className="font-display text-3xl md:text-5xl font-extrabold text-primary text-balance leading-[1.1]">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed text-balance">
                {description}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
