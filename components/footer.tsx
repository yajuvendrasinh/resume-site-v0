"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function Footer() {
  return (
    <footer className="py-8 border-t">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Yajuvendrasinh Gida. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="https://github.com/yajuvendrasinh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="sr-only">GitHub</span>
                    <Github className="w-5 h-5" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>GitHub</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="https://www.linkedin.com/in/yajuvendrasinh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin className="w-5 h-5" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>LinkedIn</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="https://public.tableau.com/app/profile/yajuvendra/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Tableau Public"
                  >
                    <span className="sr-only">Tableau</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <path d="M15.536 0.235v2.937h-2.624v0.771h2.624v2.937h0.933v-2.937h2.624v-0.771h-2.624v-2.937zM23.579 3.251v4.328h-3.943v1.233h3.943v4.251h1.391l0.009-2.109 0.032-2.099 1.953-0.032 1.943-0.011v-1.233h-3.937v-4.328zM7.036 3.328v4.256h-3.984v1.228h3.984v4.256h1.313v-4.256h4.015v-1.233h-4.015v-4.251zM15.151 10.355v4.791h-4.405v1.584h4.405v4.797h1.709v-4.797h4.411v-1.584h-4.411v-4.791zM28.115 12.421v2.959h-2.688v1.084h2.688v3.015h1.183v-3.015h2.703v-1.084h-2.703v-2.959zM2.631 12.593v2.901h-2.631v0.828h2.631v2.928h0.891v-2.928h2.667v-0.828h-2.709v-2.901zM23.579 18.62v4.339h-4.027v1.235h4.027v4.285h1.427v-4.285h3.979v-1.235h-3.979v-4.339zM6.959 18.631v4.328h-3.943v1.235h3.943v4.255h1.468v-4.255h3.937v-1.235h-3.937v-4.333h-0.733zM15.38 24.735v2.937h-2.625v1.077h2.625v3.016h1.24l0.016-1.489 0.020-1.527h2.631v-1.077h-2.667v-2.937z" />
                    </svg>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Tableau Public</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="https://medium.com/@yajuvendrasinh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Medium"
                  >
                    <span className="sr-only">Medium</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 -1.5 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <path
                        d="M212,7365.33318 L212,7371.20376 L217.333,7373.81607 L212,7365.33318 Z M223.856,7363.13685 L217.519,7360.03908 C217.416,7359.98525 217.285,7360.02538 217.223,7360.12032 L213.56,7365.94784 L217.919,7372.8794 L223.917,7363.34532 C223.966,7363.27094 223.931,7363.17698 223.856,7363.13685 Z M218.232,7374.24868 L223.45,7376.79932 C223.752,7376.94809 224,7376.79932 224,7376.46262 L224,7365.08066 L218.232,7374.24868 Z M211,7362.95089 L211,7376.46948 C211,7376.79932 210.586,7377.11056 210.283,7376.96179 L204,7373.71721 L204,7360.34935 C204,7360.12619 204.229,7359.87269 204.635,7360.07236 L211,7362.95089 Z"
                        transform="translate(-204.000000, -7360.000000)"
                      />
                    </svg>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Medium</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="https://x.com/PunchingCat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="sr-only">Twitter</span>
                    <Twitter className="w-5 h-5" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Twitter</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="https://instagram.com/the.yuvee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="sr-only">Instagram</span>
                    <img 
                      src="/images/instagram-svg.svg" 
                      alt="Instagram" 
                      width="20" 
                      height="20" 
                      className="w-5 h-5"
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Instagram</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </footer>
  )
}
