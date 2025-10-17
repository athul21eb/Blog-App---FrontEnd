export const Banner = () => {
  return (
    <div className="banner bg-gradient-to-r from-emerald-600 via-green-500 to-lime-400 text-white text-center py-20 relative overflow-hidden">
      {/* Floating background animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-extrabold mb-4 animate-fade-in-down drop-shadow-lg">
           Blog App
        </h1>
        <p className="text-xl text-white/90 animate-fade-in-up">
          Share stories, ideas, and inspiration with the world.
        </p>
      </div>
    </div>
  )
}
