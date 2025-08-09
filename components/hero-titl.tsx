import FadeIn from "./animations/fade-in";
import TextReveal from "./animations/text-reveal";
interface HeroTitleProps {
  title: string;
  description: string;
}
export function HeroTitle({ title, description }: HeroTitleProps) {
  return (
    <section className="py-12 md:py-20 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {title}
            </h1>
          
          
            <p className="text-xl text-muted-foreground">{description}</p>
          
        </div>
      </div>
    </section>
  );
}
