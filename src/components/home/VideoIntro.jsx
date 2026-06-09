const VideoIntro = ({
  sectionRef,
  videoRef,
  overlayRef,
}) => {
  return (
    <section
      ref={sectionRef}
      className="relative h-[150vh]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* VIDEO */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          will-change-transform
          "
        >
          <source
            src="https://media.istockphoto.com/id/1942771288/video/split-multi-screen-collage-in-data-center-diverse-group-of-it-specialists-technicians.mp4?p=1&s=mp4-640x640-is&k=20&c=tff8dSJqN7cTGV6bHgpGc64qTAUZXPT5ekHuZUXgfIg="
            type="video/mp4"
          />
        </video>

        {/* DARK OVERLAY */}
        <div
          ref={overlayRef}
          className="
          absolute
          inset-0
          opacity-0
          bg-black
          "
        />

        {/* PURPLE GRADIENT */}
        <div
          className="
          absolute
          inset-0
          bg-gradient-to-b
          from-transparent
          via-[#251437]/40
          to-[#51385F]
          "
        />
      </div>
    </section>
  );
};

export default VideoIntro;