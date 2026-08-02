export function Footer() {
  return (
    <footer className="border-t border-[#F5E6D3]/6 bg-[#14100d] py-10 text-center">
      <p className="text-sm text-[#F5E6D3]/50">侯耀辉 Peter Hou — Technical Solutions</p>
      <p className="mt-2 text-xs text-[#F5E6D3]/25">
        &ldquo;I turn complex technical requirements into clear solutions and actionable plans.&rdquo;
      </p>
      <p className="mt-4 text-xs text-[#F5E6D3]/20">&copy; {new Date().getFullYear()} Peter Hou</p>
    </footer>
  )
}
