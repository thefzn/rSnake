import Cell from 'game/Cell'
import GameData from 'game/GameData'
import Snake from 'game/Snake'
import { Coord, Status } from 'game/Types'
import { npc } from 'game/algorythms'

export default class NPC extends Snake {
	private isHard: boolean
	private game: GameData

	constructor(id: number, head: Coord, game: GameData, hard: boolean = false) {
		let status: Status
		switch (id) {
			case 1:
				status = Status.NPC1
				break
			case 2:
				status = Status.NPC2
				break
			case 3:
				status = Status.NPC3
				break
			case 4:
				status = Status.NPC4
				break
			case 5:
				status = Status.NPC5
				break
			case 6:
				status = Status.NPC6
				break
			case 7:
				status = Status.NPC7
				break
			case 8:
				status = Status.NPC8
				break
			case 9:
			default:
				status = Status.NPC9
				break
		}
		super(id, head, game.grid, status)

		this.game = game
		this.isHard = hard
	}

	protected getNext(): Cell | null {
		return this.head ? npc(this.game, this.head, this.isHard) : null
	}

	protected fruitEaten(): void {
		this.game.resetFruit()
	}
}
