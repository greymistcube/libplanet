window.BENCHMARK_DATA = {
  "lastUpdate": 1701156886227,
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
          "id": "036e7abd9c33b20bbb95026fc963dc519670c011",
          "message": "Suggestion",
          "timestamp": "2023-11-28T16:22:14+09:00",
          "tree_id": "adb8379e52873b1928cb552efae42b018cda5b83",
          "url": "https://github.com/greymistcube/libplanet/commit/036e7abd9c33b20bbb95026fc963dc519670c011"
        },
        "date": 1701156860513,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 936010.3092783506,
            "unit": "ns",
            "range": "± 100801.92467215934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1705314,
            "unit": "ns",
            "range": "± 68280.68125504506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1340771.1340206186,
            "unit": "ns",
            "range": "± 120878.07731239883"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4943798.571428572,
            "unit": "ns",
            "range": "± 240343.74446857563"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34352.808988764045,
            "unit": "ns",
            "range": "± 2213.39362475365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5036042.857142857,
            "unit": "ns",
            "range": "± 48792.42870467814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14019914.285714285,
            "unit": "ns",
            "range": "± 82485.65243206151"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32990035.714285713,
            "unit": "ns",
            "range": "± 272788.8747086933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 67321756.66666667,
            "unit": "ns",
            "range": "± 724207.1087616804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 132358793.33333333,
            "unit": "ns",
            "range": "± 1569604.739811299"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3256117.127403846,
            "unit": "ns",
            "range": "± 2438.6676298571338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1056811.8539663462,
            "unit": "ns",
            "range": "± 1717.954001179516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 750386.8791852678,
            "unit": "ns",
            "range": "± 1675.7034014372866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1932906.1104910714,
            "unit": "ns",
            "range": "± 3990.540410523131"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 603390.4822716346,
            "unit": "ns",
            "range": "± 1352.5914119444017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566002.9506138393,
            "unit": "ns",
            "range": "± 880.2747010405382"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2181176.470588235,
            "unit": "ns",
            "range": "± 103052.19966606268"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2257835,
            "unit": "ns",
            "range": "± 53148.75857874329"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2836200,
            "unit": "ns",
            "range": "± 91529.93880129985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2604650.819672131,
            "unit": "ns",
            "range": "± 116128.82734697533"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6053867.692307692,
            "unit": "ns",
            "range": "± 281038.022954464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180855.81395348837,
            "unit": "ns",
            "range": "± 9482.18893382452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174781.69014084508,
            "unit": "ns",
            "range": "± 7335.497059001229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143134.0909090909,
            "unit": "ns",
            "range": "± 4585.261686722949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2832600,
            "unit": "ns",
            "range": "± 37544.47618901737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2541692.8571428573,
            "unit": "ns",
            "range": "± 30727.398555328793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13246.875,
            "unit": "ns",
            "range": "± 2000.6290129277895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59695.294117647056,
            "unit": "ns",
            "range": "± 4507.240362602654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50771.42857142857,
            "unit": "ns",
            "range": "± 5054.75102616419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62072.619047619046,
            "unit": "ns",
            "range": "± 8033.6993712776275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2848.3870967741937,
            "unit": "ns",
            "range": "± 449.7856743774476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11856.666666666666,
            "unit": "ns",
            "range": "± 1571.8771430391716"
          }
        ]
      }
    ]
  }
}