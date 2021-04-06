const WeaponBoxImg = ({img}) => (
    <img
                src={img.image}
                alt={img.name}
                className="weapon-box--img"
                id={`weapon-box--img-${img.id}`}
            />
)

export default WeaponBoxImg