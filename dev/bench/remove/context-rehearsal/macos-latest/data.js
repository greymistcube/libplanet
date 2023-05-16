window.BENCHMARK_DATA = {
  "lastUpdate": 1684227096592,
  "repoUrl": "https://github.com/greymistcube/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "677c66337b332a9e1966f6d61ca2312d04090702",
          "message": "Removed IActionContext.Rehearsal property",
          "timestamp": "2023-05-16T17:28:31+09:00",
          "tree_id": "9ffcc97be1fa4ee52e06a68f2d8e8fe744d2a162",
          "url": "https://github.com/greymistcube/libplanet/commit/677c66337b332a9e1966f6d61ca2312d04090702"
        },
        "date": 1684226792561,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7760747.578947368,
            "unit": "ns",
            "range": "± 267276.9653933387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20515113.11627907,
            "unit": "ns",
            "range": "± 760376.2919539437"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49911772.72727273,
            "unit": "ns",
            "range": "± 2119407.382531603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98915254.1764706,
            "unit": "ns",
            "range": "± 1967326.2456597735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200289471.42857143,
            "unit": "ns",
            "range": "± 4378251.309620687"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66935.91666666667,
            "unit": "ns",
            "range": "± 7646.895410855399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298571.7012987013,
            "unit": "ns",
            "range": "± 15133.649406002973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 300323.2978723404,
            "unit": "ns",
            "range": "± 19371.992809057847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 289581.1111111111,
            "unit": "ns",
            "range": "± 19564.328065683036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4007957.272727273,
            "unit": "ns",
            "range": "± 82507.39358727152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3755607.2,
            "unit": "ns",
            "range": "± 70222.60656471574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16362.67816091954,
            "unit": "ns",
            "range": "± 1879.0037160640811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83069.55670103093,
            "unit": "ns",
            "range": "± 9559.720853195575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80564.19191919192,
            "unit": "ns",
            "range": "± 10997.93008602423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92986.76344086022,
            "unit": "ns",
            "range": "± 14259.792778082936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4113.093023255814,
            "unit": "ns",
            "range": "± 565.9898019847641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16052.247126436781,
            "unit": "ns",
            "range": "± 1464.4793837893292"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1587018.121212121,
            "unit": "ns",
            "range": "± 182531.92128570404"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3002452.4727272727,
            "unit": "ns",
            "range": "± 126511.534080502"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2585712.3163265307,
            "unit": "ns",
            "range": "± 293589.3903989319"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6292039.445454545,
            "unit": "ns",
            "range": "± 248442.06745797553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3250336.242424242,
            "unit": "ns",
            "range": "± 92697.64592447532"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3409071.3076923075,
            "unit": "ns",
            "range": "± 114253.32109399753"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4379709.785714285,
            "unit": "ns",
            "range": "± 74070.53867681553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4383233.428571428,
            "unit": "ns",
            "range": "± 174597.41839502766"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7586194.492063492,
            "unit": "ns",
            "range": "± 299794.1854118219"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6194633.252604167,
            "unit": "ns",
            "range": "± 45934.58597959183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1954491.8523995536,
            "unit": "ns",
            "range": "± 18459.961944208066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1282620.1225260417,
            "unit": "ns",
            "range": "± 7645.852148249215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2509535.2491629464,
            "unit": "ns",
            "range": "± 18676.52285236917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841531.7035435268,
            "unit": "ns",
            "range": "± 2863.064123461054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771604.7839192708,
            "unit": "ns",
            "range": "± 6516.014562366593"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "08bb683f346859d29e325c9dacf39c9f72e3a9b0",
          "message": "Changelog",
          "timestamp": "2023-05-16T17:32:31+09:00",
          "tree_id": "331832bd05821743d2d84e301db65359b1f52599",
          "url": "https://github.com/greymistcube/libplanet/commit/08bb683f346859d29e325c9dacf39c9f72e3a9b0"
        },
        "date": 1684227074187,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8193830.142857143,
            "unit": "ns",
            "range": "± 100139.91927902075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20655017.14285714,
            "unit": "ns",
            "range": "± 182636.36737006097"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51943224.21428572,
            "unit": "ns",
            "range": "± 447196.20379532577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105259741.06666666,
            "unit": "ns",
            "range": "± 1333111.0735104594"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215316557.85714287,
            "unit": "ns",
            "range": "± 1176769.0895235536"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69427.30526315789,
            "unit": "ns",
            "range": "± 9874.61037321698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 337065.9636363636,
            "unit": "ns",
            "range": "± 13202.143484724207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 322336.61235955055,
            "unit": "ns",
            "range": "± 17803.02077881358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 312499.9090909091,
            "unit": "ns",
            "range": "± 7469.855324085637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4254828.633333334,
            "unit": "ns",
            "range": "± 68062.98973206119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3993294.2333333334,
            "unit": "ns",
            "range": "± 63803.9296298396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22171.173469387755,
            "unit": "ns",
            "range": "± 3385.897895274903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109720.32653061225,
            "unit": "ns",
            "range": "± 11856.990980595712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118983.15555555555,
            "unit": "ns",
            "range": "± 4449.303969854343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122520.0625,
            "unit": "ns",
            "range": "± 13136.704916348335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7797.266666666666,
            "unit": "ns",
            "range": "± 594.993778647486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21872.27659574468,
            "unit": "ns",
            "range": "± 2804.4696780960794"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1551908.1875,
            "unit": "ns",
            "range": "± 123852.6303307207"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2946116.7204301073,
            "unit": "ns",
            "range": "± 187166.39501746575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2495680.4479166665,
            "unit": "ns",
            "range": "± 219407.06878145682"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6379011.755319149,
            "unit": "ns",
            "range": "± 246454.31022142016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3304191.409090909,
            "unit": "ns",
            "range": "± 69893.31054911588"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3511226.095238095,
            "unit": "ns",
            "range": "± 155904.75710548353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4573047.766666667,
            "unit": "ns",
            "range": "± 61880.264752026975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4522357.257894737,
            "unit": "ns",
            "range": "± 341047.9265994773"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7652459.777777778,
            "unit": "ns",
            "range": "± 194676.8035732228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6977840.351004465,
            "unit": "ns",
            "range": "± 59793.644211471474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2011403.9344951923,
            "unit": "ns",
            "range": "± 7819.735543975735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1299040.646205357,
            "unit": "ns",
            "range": "± 2424.4418379416306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2727917.00906808,
            "unit": "ns",
            "range": "± 76896.53799698033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 785717.1510881697,
            "unit": "ns",
            "range": "± 2109.0675831986364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 724268.7244001116,
            "unit": "ns",
            "range": "± 8014.692193499299"
          }
        ]
      }
    ]
  }
}