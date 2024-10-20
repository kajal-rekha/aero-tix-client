
import Image from "next/image";
import { Calendar, User, MessageSquare } from "lucide-react";
import { blogPosts } from "@/data/blog";
import SectionTittle from "./SectionTittle";
import Link from "next/link";
import { buttonVariants } from "./ui/Button";


const Blog = () => {
  return (
      <section className="mt-32">
          <div className="wrapper">
              <SectionTittle h3="Discover Our Latest Thoughts" />
             
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
                  {blogPosts.map((post) => (
                      <div
                          key={post.id}
                          className="relative overflow-hidden group rounded-lg"
                      >
                          <Image
                              src={post.image}
                              alt={post.title}
                              width={600}
                              height={400} priority 
                              className="w-full h-[400px] object-cover"
                          />
                          <div className="absolute inset-0 bg-slate bg-opacity-50"></div>
                          <div className="absolute inset-0 bg-slate transform translate-y-full group-hover:translate-y-0 transition-transform eq ease-in-out"></div>
                          <div className="absolute inset-0 p-6 flex flex-col gap-5  justify-end">
                              <div>
                                  <div className="inline-flex items-center bg-orange text-white rounded-full px-3 py-1 text-sm mb-4 group-hover:bg-white group-hover:text-slate transition-colors duration-300">
                                      <Calendar className="w-4 h-4 mr-2 " />
                                      {post.date}
                                  </div>
                                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">
                                      {post.title}
                                  </h3>
                              </div>
                              <div className="">
                                  <div className="flex items-center text-white mb-4 group-hover:text-white transition-colors duration-300">
                                      <User className="w-4 h-4 mr-2 text-orange" />
                                      <span className="mr-4">
                                          {post.author}
                                      </span>
                                      <MessageSquare className="w-4 h-4 mr-2 text-orange" />
                                      <span>
                                          {post.comments} Comment
                                          {post.comments !== 1 ? "s" : ""}
                                      </span>
                                  </div>
                                  <button className="bg-orange text-white px-6 py-2 rounded-md font-semibold group-hover:bg-white group-hover:text-slate transition-colors duration-300 border-none">
                                      Read More
                                  </button>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
              <div className="text-center mt-16">
                  <Link
                      href="/blog"
                      className={buttonVariants({ variant: "ocean" })}
                  >
                    Explore more
                  </Link>
              </div>
          </div>
      </section>
  );
}

export default Blog