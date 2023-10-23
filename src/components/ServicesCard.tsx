import { IService } from '@/interface/data.interface'
import { FC } from 'react'

interface ServicesCardProps {
  item: IService
}

const ServicesCard: FC<ServicesCardProps> = ({item}) => {
  return <div>ServicesCard</div>
}

export default ServicesCard