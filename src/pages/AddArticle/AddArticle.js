import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import classNames from 'classnames/bind';
import styles from './AddArticle.module.scss';
import { Button } from '@mui/material';

const cx = classNames.bind(styles);
function AddArticle() {
    // const editorRef = useRef(null);
    // const log = () => {
    //     if (editorRef.current) {
    //         console.log(editorRef.current.getContent());
    //     }
    // };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h2> Thêm bài viết mới</h2>
                <div className={cx('title')}>
                    <h3>Tiêu đề bài viết</h3>
                    <input placeholder="Thêm tiêu đề" />
                </div>
                <div className={cx('imageUrl')}>
                    <h3>Ảnh bìa</h3>
                    <input type="file" />
                </div>

                <div className={cx('content')}>
                    <h3>Nội dung</h3>
                    <Editor
                        apiKey="96g9djaurttei6ejbiasz9fqmlfuj5yvnh0wnuhc5rbupyau"
                        // onInit={(evt, editor) => (editorRef.current = editor)}
                        // initialValue="<p>This is the initial content of the editor.</p>"
                        init={{
                            height: 300,
                            menubar: false,
                            plugins: [
                                'advlist',
                                'autolink',
                                'lists',
                                'link',
                                'image',
                                'charmap',
                                'preview',
                                'anchor',
                                'searchreplace',
                                'visualblocks',
                                'code',
                                'fullscreen',
                                'insertdatetime',
                                'media',
                                'table',
                                'code',
                                'help',
                                'wordcount',
                            ],
                            toolbar:
                                'undo redo | blocks | ' +
                                'bold italic forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                        }}
                    />
                    {/* <button onClick={log}>Log editor content</button> */}
                </div>
                <Button variant="contained" className={cx('btn')}>
                    {' '}
                    Lưu bài viết
                </Button>
            </div>
        </div>
    );
}

export default AddArticle;
