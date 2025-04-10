import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href="https://github.com/divyanshsingh"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Divyansh Singh
          </a>
          . The source code is available on{" "}
          <a
            href="https://github.com/divyanshsingh/job-portal"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
        <div className="flex gap-4">
          <Link
            to="/privacy"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer 