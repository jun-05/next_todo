import {
  GiPencilBrush,
  GiTie,
  GiRunningShoe,
  GiCookingPot,
  GiBookmarklet,
  GiNotebook,
} from 'react-icons/gi';

export function parseIcon(iconName: string) {
  if (iconName === 'GiPencilBrush') return <GiPencilBrush />;
  if (iconName === 'GiTie') return <GiTie />;
  if (iconName === 'GiRunningShoe') return <GiRunningShoe />;
  if (iconName === 'GiBookmarklet') return <GiBookmarklet />;
  if (iconName === 'GiNotebook') return <GiNotebook />;
  if (iconName === 'GiCookingPot') return <GiCookingPot />;
}
