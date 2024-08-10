import TagLine from "./Tagline";

const Heading = ({ className, title, text, tag }) => {
  return (
    <div
    className={`${className } max-w-[50rem] mx-auto mb-auto lg:mb-20`} >
      {tag && (<TagLine>{tag}</TagLine>)}
      {title && <h2 className="h2">{title}</h2>} 
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  )
}

export default Heading
