export default function FrontPage() {
  let frontPageData = require("./../data/front-page-data.json");

  return (
    <div className="site-main">
      {frontPageData.map((section, index) => {
        const {
          link,
          openInNewWidnow,
          title,
          subscript,
          superscript,
          bgImg
        } = section;

        return (
          <a
            key={index}
            href={link}
            target={openInNewWidnow && `_blank`}
            className="section"
          >
            <div className="cont_title">
              {title && <h1>{title}</h1>}
              {subscript && <h3>{subscript}</h3>}
            </div>
            <div className="cont_desc">
              <p>{superscript}</p>
            </div>
            {bgImg && <img className="section-bg-img" src={bgImg} alt="" />}
          </a>
        );
      })}
    </div>
  );
}
