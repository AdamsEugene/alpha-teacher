/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { useState } from "react";
import { Uploader, Message, Loader, useToaster } from "rsuite";
import AvatarIcon from "@rsuite/icons/legacy/Avatar";
import { FileType } from "rsuite/esm/Uploader";

interface Props {
  Icon?: React.FC<any>;
}

function previewFile(file: File, callback: Function) {
  const reader = new FileReader();
  reader.onloadend = () => {
    callback(reader.result);
  };
  reader.readAsDataURL(file);
}

export default function AvatarUploader(props: Props) {
  const { Icon } = props;
  const toaster = useToaster();
  const [uploading, setUploading] = useState(false);
  const [fileInfo, setFileInfo] = useState<string>();

  const onError = async () => {
    setFileInfo(undefined);
    setUploading(false);
    await toaster.push(<Message type="error">Upload failed</Message>);
  };

  const onSuccess = async (response: any, file: FileType) => {
    setUploading(false);
    await toaster.push(<Message type="success">Uploaded successfully</Message>);
    console.log(response, file);
  };

  return (
    <Uploader
      fileListVisible={false}
      listType="picture"
      action="//jsonplaceholder.typicode.com/posts/"
      onUpload={(file) => {
        setUploading(true);
        if (file.blobFile)
          previewFile(file.blobFile, (value: string) => {
            setFileInfo(value);
          });
      }}
      onSuccess={(res: any, file: FileType) => {
        onSuccess(res, file);
      }}
      onError={() => {
        onError();
      }}
    >
      <button style={{ width: 120, height: 120 }}>
        {uploading && <Loader backdrop center />}
        {fileInfo ? (
          <img src={fileInfo} width="100%" height="100%" />
        ) : Icon ? (
          <Icon style={{ fontSize: 80 }} />
        ) : (
          <AvatarIcon style={{ fontSize: 80 }} />
        )}
      </button>
    </Uploader>
  );
}
