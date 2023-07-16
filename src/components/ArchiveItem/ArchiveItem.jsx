import './ArchiveItem.scss';

const ArchiveItem = ({ key, titleArchive, contentArchive }) => {
  return (
    <div key={key} className="item-wrapper">
      <div className="title-archive">{titleArchive}</div>
      <div className="content-archive">{contentArchive}</div>
    </div>
  );
};

export default ArchiveItem;
