import { Flex } from '@chakra-ui/layout';
import './ArchiveItem.scss';

const ArchiveItem = ({ keyArchive, titleArchive, from, contentArchive }) => {
  return (
    <div key={keyArchive} className="item-wrapper">
      <Flex direction="row" justify="space-between">
        <div className="title-archive">{titleArchive}</div>{' '}
        <div className="from">{from}</div>
      </Flex>
      <div className="content-archive">{contentArchive}</div>
    </div>
  );
};

export default ArchiveItem;
