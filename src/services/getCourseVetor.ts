import web from '../assets/svg/web.svg';
import processos from '../assets/svg/processos.svg';
import ihc from '../assets/svg/IHC.svg';
import requisitos from '../assets/svg/requisitos.svg';
const vetores = [
  { id: 1, image: web },
  { id: 2, image: processos },
  { id: 3, image: ihc },
  { id: 4, image: requisitos },
];
export default function getCourseVetor(id: number): SVGAElement {
  const vetor = vetores.find(vetor => vetor.id === id);
  return vetor.image;
}
