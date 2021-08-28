
class Register
{
	constructor(name, code, widthInBits)
	{
		this.name = name;
		this.code = code;
		this.widthInBits = widthInBits;
	}

	static Instances()
	{
		if (Register._instances == null)
		{
			Register._instances =
				new Register_Instances();
		}
		return Register._instances;
	}

	static byCodeAndWidthInBits(code, widthInBits)
	{
		return Register.Instances().byCodeAndWidthInBits(code, widthInBits);
	}

	codeAndWidthInBitsAsString()
	{
		return this.code + "_" + this.widthInBits;
	}
}

class Register_Instances
{
	constructor()
	{
		var _8 = 8;
		var _16 = 16;

		this.ah = new Register("ah", 4, _8);
		this.bh = new Register("bh", 5, _8);
		this.ch = new Register("ch", 6, _8);
		this.dh = new Register("ch", 7, _8);

		this.al = new Register("al", 0, _8);
		this.bl = new Register("bl", 1, _8);
		this.cl = new Register("cl", 2, _8);
		this.dl = new Register("dl", 3, _8);

		this.ax = new Register("ax", 0, _16);
		this.bx = new Register("bx", 3, _16);
		this.cx = new Register("cx", 1, _16);
		this.dx = new Register("dx", 2, _16);

		this._bx = new Register("[bx", 7, _16);

		this._All =
		[
			this.ah,
			this.bh,
			this.ch,
			this.dh,

			this.al,
			this.bl,
			this.cl,
			this.dl,

			this.ax,
			this.bx,
			this.cx,
			this.dx,

			this._bx,
		];

		this._AllByCodeAndWidthInBits = new Map
		(
			this._All.map
			(
				x => [x.codeAndWidthInBitsAsString(), x]
			)
		);
	}

	byCodeAndWidthInBits(code, widthInBits)
	{
		return this._AllByCodeAndWidthInBits.get(code + "_" + widthInBits);
	}
}