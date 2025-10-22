<div className="grid md:grid-cols-5 gap-0">
                  {/* Image Section with Title Overlay */}
                  <div className="md:col-span-2 relative h-96 md:h-auto overflow-hidden">
                    <img 
                      src={industry.image} 
                      alt={industry.title}
                      className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Glossy overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
                    
                    {/* Title and Icon on Image */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-center text-center">
                      <div className="mb-3 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/20 backdrop-blur-md border border-primary/30 group-hover:bg-primary group-hover:border-primary transition-all duration-300 shadow-lg">
                        <industry.icon className="h-7 w-7 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl font-serif text-secondary-foreground drop-shadow-lg">{industry.title}</CardTitle>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="md:col-span-3 p-6 bg-gradient-to-br from-card via-card to-card/80">
