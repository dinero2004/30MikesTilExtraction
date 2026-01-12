import { ImageContainer } from "@/components/ui/image/image";
import { Button } from "@/ui/button/button";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* HERO BACKGROUND */}
        <ImageContainer
          src="/images/hero-Image.png"
          alt="Hero background"
          className="absolute inset-0 -z-10 object-cover"
        />
        {/* TITLE BANNER */}
        {/* using img because the ImageContainer uses objectFit cover that is not
      suitable for the logo on the hero section */}
        <img
          src="/images/primary-logo.png"
          alt="Primary logo"
          className="absolute top-[30%] left-1/2
             h-[15vh] max-h-40px
             w-auto
             -translate-x-1/2 -translate-y-1/2"
        />
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50 -z-10" />
        {/* HERO CONTENT */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
          {/* CTA BUTTONS */}
          <div className="flex gap-4">
            <Button label="PLAY NOW" />
            <Button label="LEARN MORE" variant="secondary" />
          </div>
        </div>
        {/* BOTTOM STRIP */}
        <div className="absolute bottom-0 w-full bg-amber-950 py-5">
          <p className="text-center text-white font-bold tracking-widest">
            SURVIVE. &nbsp; FORTIFY. &nbsp; EXTRACT.
          </p>
        </div>
      </section>

      {/* SECTION 2 */}

      <section className="relative min-h-screen w-full overflow-hidden">
        {/* SECTION BACKGROUND */}
        <ImageContainer
          src="/images/section2-Image.png"
          alt="Soldier shooting against robot enemy"
          className="absolute inset-0 -z-10 object-cover"
        />

        {/* BLURRED TEXT PANEL */}
        <div
          className="absolute bottom-12  -translate-x1/2
                max-w-3xl w-[90%]
                backdrop-blur-s bg-white/20
                px-8 py-6
                border border-white/10
                shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
        >
          <p className="text-center text-black font-semibold tracking-wide">
            You and your squad are stranded deep behind enemy lines. Cut off
            from HQ, your only chance of survival is to fortify a building, hold
            your ground, and wait for extraction.
          </p>
        </div>
      </section>

      {/* SECTION 3 */}

      <section className="relative min-h-screen w-full overflow-hidden">
        {/* SECTION BACKGROUND */}
        <ImageContainer
          src="/images/town2.png"
          alt="dark industrial brutalism city"
          className="absolute inset-0 -z-10 object-cover"
        />

        {/* BLURRED TEXT PANEL */}
        <div
          className="absolute bottom-0
                max-w h-40
                backdrop-blur-s bg-white/20
                px-8 py-6
                border border-white/10
                shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
        >
          <p className="text-left text-black font-semibold tracking-wide">
            Stranded in enemy territory, your unit has lost all contact with HQ.
            Your objective is clear: secure a structure, fortify your position,
            and survive until extraction arrives. Supplies are limited, threats
            are constant, and every decision you make could mean the difference
            between escape and annihilation.
          </p>
        </div>
      </section>

      {/* SECTION ENEMIES */}

      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* BACKGROUND */}
        <ImageContainer
          src="/images/office.png"
          alt="Abandoned office battlefield"
          className="absolute inset-0 -z-20 object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gray-700 -z-10" />

        {/* ENEMIES */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl w-full px-8">
          {/* Riflemen */}
          <div className="flex flex-col items-center">
            <div className="relative w-64 h-96 bg-black/30 border border-white/10 flex items-center justify-center">
              <ImageContainer
                src="/images/rifleman.png"
                alt="Rifleman enemy"
                className="w-44 h-auto"
              />
            </div>
            <div className="w-64 bg-black/60 py-3 text-center">
              <p className="text-white font-medium tracking-wide">Riflemen</p>
            </div>
          </div>

          {/* Machine Gunners */}
          <div className="flex flex-col items-center">
            <div className="relative w-64 h-96 bg-black/30 border border-white/10 flex items-center justify-center">
              <ImageContainer
                src="/images/machine-gunner.png"
                alt="Machine Gunner enemy"
                className="w-44 h-auto"
              />
            </div>
            <div className="w-64 bg-black/60 py-3 text-center">
              <p className="text-white font-medium tracking-wide">
                Machine Gunners
              </p>
            </div>
          </div>

          {/* Commandos */}
          <div className="flex flex-col items-center">
            <div className="relative w-64 h-96 bg-black/30 border border-white/10 flex items-center justify-center">
              <ImageContainer
                src="/images/heavy-machine-gunner.png"
                alt="Commando enemy"
                className="w-44 h-auto"
              />
            </div>
            <div className="w-64 bg-black/60 py-3 text-center">
              <p className="text-white font-medium tracking-wide">Commandos</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
