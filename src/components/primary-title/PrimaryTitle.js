import TitlePages from "../title-pages/TitlePages";
import Card from "../card/Card";

function PrimaryTitle({ title, multiTitle, subtitle, icon, count }) {
  const typeTitle = multiTitle ? multiTitle : title;

  return (
    <div className="row-pages">
      <TitlePages title={title} description={subtitle} />
      <Card
        title={typeTitle}
        cuantity={count}
        icon={icon}
        colorBorder="border-left-pages"
        colorText="text-pages"
      />
    </div>
  );
}

export default PrimaryTitle;
