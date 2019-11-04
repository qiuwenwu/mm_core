/**
 * 举例：因为商品是有限的（why），所有我想要在用户下单时改变商品的库存（what），所以当用户下单时（when），
 * 数据库的商品表（where）中某商品（who）的num字段-1（how），如果成功-1就通知用户下单成功，
 * 如果失败则再尝试一次或通知用户下单失败
 */

class item {
	/**
	 * 构造函数
	 * @param {String} dir
	 */
	constructor(dir) {
		this.config = {
			// 为什么要做 (description描述)
			why: "",
			// 做什么 (cmd指令)
			what: "",
			// 什么地方
			where: [],
			// 什么人，谁（对象）
			who: [],
			// 行动次数
			times: 1
		}

		this.items = [{
			// 是否列队，等待执行
			waiting: true
		}];
	}
}

/**
 * 运行
 */
item.prototype.run = function(param) {
	var json = {};
	var msg = this.check(param);
	if (!msg) {
		var result = {
			log: this.doing(param)
		};
	} else if (may_achieve(param)) {
		this.then_doing(param);
		json.error = {
			code: 70000,
			message: "当前条件不满足，但可能做到，已列入待处理事项，时机符合再执行"
		}
	} else {
		json.error = {
			code: 70000,
			message: msg
		}
	}
	return json
};
/**
 * 可能做到
 * @param {Object} param
 */
item.prototype.may_achieve = function(param) {
	return true;
};
/**
 * 到时候执行
 * @param {Object} param
 */
item.prototype.then_doing = async function(param) {
	while (this.) {

	}

};

/**
 * 到时候执行
 * @param {Object} param
 */
item.prototype.doing = function(param) {
	var log = [];
	var where = this.where(param);
	var who = this.who(param);
	if (where.length > 0) {
		for (var i = 0; i < where.length; i++) {
			var e = where[i];
			if (who.length > 0) {
				for (var n = 0; i < who.length; i++) {
					var o = who[n]
					var res = this.run_how(e, o, log);
					log.push({
						where: e,
						who: o,
						bl: res.bl,
						tip: res.tip
					});
				}
			} else {
				var res = this.run_how(e, null, log);
				log.push({
					where: i,
					who: null,
					bl: res.bl,
					tip: res.tip
				})
			}
		}
	} else {
		for (var n = 0; i < who.length; i++) {
			var o = who[n];
			var res = this.how(null, o, log);
			log.push({
				where: null,
				who: o,
				bl: res.bl,
				tip: res.tip
			})
		}
	}
	return log;
};

/**
 * 验证是否满足条件
 * @param {Object} param 参数
 * @return {String} 满足条件返回null, 不满足则返回错误提示
 */
item.prototype.check = function(param) {
	return msg;
};

/**
 * 当什么时候
 * @param {Object} param
 * @return {Boolean} 
 */
item.prototype.when = function(param) {
	return false;
};

/**
 * 什么地方
 * @param {Object} param
 */
item.prototype.where = function(param) {
	return this.config.where;
};

/**
 * 什么人
 * @param {Object} param
 */
item.prototype.who = function(param) {
	return this.config.who;
};

/**
 * 如何做
 * @param {String} where 在什么地方，
 * @param {String} who
 * @param {Array} log 行为日志
 * @return {Object} 返回评判结果
 */
item.prototype.run_how = function(where, who, log) {
	var res = this.how_much(this.how(where, who, log), log, 1);
	if (!res.bl && this.times > 1) {
		for (var i = 2; i <= this.times; i++) {
			res = this.how_much(this.how(where, who, log), log, i);
			if (res.bl) {
				break;
			}
		}
	}
	return res;
};

/**
 * 如何做
 * @param {String} where 在什么地方，
 * @param {String} who
 * @param {Array} log 行为日志
 * @return {Object} 返回执行结果
 */
item.prototype.how = function(where, who, log) {
	return {}
};

/**
 * 做到什么程度
 * @param {Object} result 
 * @param {Array} log 行为日志
 * @param {Number} times 第几次执行
 * @return {Object} 返回对象，其中bl等于true表示达标，false表示不达标
 */
item.prototype.how_much = function(result, log, times) {
	return {
		bl: true,
		tip: "达标"
	};
};

/**
 * 工作类
 */
class Work {

}

/**
 * 是否满足条件
 * @param {Object} param
 */
Work.prototype.check = function(param) {

};

/**
 * 创建
 */
Work.prototype.create() {

};

/**
 * 执行
 */
Work.prototype.execute(param) {

};

/**
 * 改变，例如：add增、del删、set改、get查，update更新、load载入、save保存、sort排序、run运行
 */
Work.prototype.change() {

}

exports.Work = Work;
