import './ArchiveItem.scss';

const ArchiveItem = ({ keyArchive, titleArchive, contentArchive }) => {
  return (
    <div key={keyArchive} className="item-wrapper">
      <div className="title-archive">{titleArchive}</div>
      <div className="content-archive">{contentArchive}</div>
    </div>
  );
};

export default ArchiveItem;
