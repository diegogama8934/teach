import Image from "next/image";
import { AddCommentOnAnnouncement, CommentsOnAnnouncement } from "@/components";
import { annoucement } from "@/interfaces";

interface Props {
  announcement: annoucement
}

async function getAnnoucementPage() {

}

export async function Announcement({ announcement }: Props) {

  const { comments, user, content } = announcement;

  return (

    <div className="flex gap-4 items-start p-4 border rounded-xl">
      <Image
        src="https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        width={40}
        height={40}
        alt="Foto de perfil"
        className="w-10 object-cover aspect-square rounded-full object-right"
      />
      <div className="flex flex-col gap-2">

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-zinc-600 -mb-1">{user.fullname}</span>
            <span className="text-zinc-400">Docente</span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-zinc-500">{comments.length} comentarios</span>
            <span className="text-zinc-500">26/07/2024</span>
          </div>
        </div>

        <p className="text-zinc-500 mt-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar, erat rutrum interdum blandit, nulla erat vehicula mi, a
          pretium magna augue a lorem. Sed et metus id est dictum tincidunt sit amet a felis. Aliquam vitae lacinia lorem. In aliquam
          fermentum nulla, at vulputate ipsum placerat in. Cras elementum suscipit malesuada. Sed ullamcorper ac elit ac elementum.
          Suspendisse sollicitudin porttitor libero, quis porta mi lobortis id. Sed sed leo massa. Nullam in tempus orci. Donec ligula
          risus, consectetur vel nisi ac, semper tristique lectus.
          <br />
          <br />
          Curabitur consectetur lectus ex, ut mollis risus egestas dictum. In sed lorem eu arcu sagittis commodo non mollis massa.
          Vivamus egestas posuere lacus a accumsan. Quisque et risus facilisis, imperdiet leo eu, suscipit lacus. Donec sed cursus
          nunc, a viverra magna. Vestibulum imperdiet vitae diam et blandit. Curabitur et pellentesque lectus. Sed non lacus ac justo
          ullamcorper maximus quis et urna. Vivamus eget enim felis. Proin convallis orci diam, ac placerat arcu aliquet non.
        </p>

        <CommentsOnAnnouncement comments={comments} />

        <AddCommentOnAnnouncement />
      </div>
    </div>
  );
}