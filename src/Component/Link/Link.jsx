

export default function 
({route}) {
  return (
    <div>
          <li className="mr-3">
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  )
}
