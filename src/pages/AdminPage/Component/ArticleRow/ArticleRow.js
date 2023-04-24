import { Button } from '@mui/material';
import images from './../../../../assets/images/images';
import './ArticleRow.scss';

function ArticleRow() {
    return (
        <tr>
            <td>1</td>
            <td>Mối quan hê biện chứng giữa ReactJS</td>
            <td>Nguyễn Khắc Tư</td>
            <td>2023/04/07</td>
            <td>
                <Button className="btn">
                    <img src={images.delete} alt="xóa" />
                    Xóa
                </Button>
            </td>
            <td>
                <Button className="btn">
                    <img src={images.edit} alt="sửa" />
                    Sửa
                </Button>
            </td>
        </tr>
    );
}

export default ArticleRow;
