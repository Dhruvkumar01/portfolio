import './project.css'
import ecommerce from '../../asset/ecommerce.jpg'

const Project = () => {
  return (
    <section id="project">
        <div className="project-heading">Projects</div>
        <div className="container project-container">
            <div className="project">
                <img src={ecommerce} alt="not found" className='project-img'/>
                <div className="project-link">
                    <a href="https://dhruvshop.netlify.app" target="_blank" rel="noreferrer" className='project-link-text'>demo</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Project
