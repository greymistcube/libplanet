window.BENCHMARK_DATA = {
  "lastUpdate": 1686924428399,
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
          "id": "668e6170100ac4148dc9bbb696538e4f3175e24f",
          "message": "Use updated API",
          "timestamp": "2023-06-16T21:27:25+09:00",
          "tree_id": "a74c43a54001892637a69309f353991dfceed011",
          "url": "https://github.com/greymistcube/libplanet/commit/668e6170100ac4148dc9bbb696538e4f3175e24f"
        },
        "date": 1686924406905,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8610181.807017544,
            "unit": "ns",
            "range": "± 374241.3265310633"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20780585.846153848,
            "unit": "ns",
            "range": "± 547075.7761153525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51937644.571428575,
            "unit": "ns",
            "range": "± 1203256.60743798"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101713713.56666666,
            "unit": "ns",
            "range": "± 1834221.1749089453"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209498163.9375,
            "unit": "ns",
            "range": "± 3866671.9777190727"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64205.64772727273,
            "unit": "ns",
            "range": "± 6267.300822412745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 341954.75531914894,
            "unit": "ns",
            "range": "± 30136.891350248647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 322033.5816326531,
            "unit": "ns",
            "range": "± 29145.72920622059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 312268.1808510638,
            "unit": "ns",
            "range": "± 22892.212331826646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4381619.27027027,
            "unit": "ns",
            "range": "± 135327.86868639698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4001629.533333333,
            "unit": "ns",
            "range": "± 176298.0110993177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19365.494623655915,
            "unit": "ns",
            "range": "± 2470.5543983682833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116603.78947368421,
            "unit": "ns",
            "range": "± 19104.151639076365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112385.82828282828,
            "unit": "ns",
            "range": "± 17202.686666083206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132120.66315789474,
            "unit": "ns",
            "range": "± 21525.474793790178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7377.542105263158,
            "unit": "ns",
            "range": "± 1639.5838789402108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17883.8202247191,
            "unit": "ns",
            "range": "± 2121.6014993063704"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1590472.1458333333,
            "unit": "ns",
            "range": "± 146021.17385243025"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3127917.714285714,
            "unit": "ns",
            "range": "± 205301.18405978693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2651612.125,
            "unit": "ns",
            "range": "± 261939.78215645993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6672618.206521739,
            "unit": "ns",
            "range": "± 372719.16533077415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3431256.8333333335,
            "unit": "ns",
            "range": "± 94277.45001202158"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3587964.2,
            "unit": "ns",
            "range": "± 186211.9734455632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4577814.80882353,
            "unit": "ns",
            "range": "± 216681.4169193033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4423215.528089887,
            "unit": "ns",
            "range": "± 243928.8594588357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8119689.426315789,
            "unit": "ns",
            "range": "± 533643.5834484742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7101589.347836538,
            "unit": "ns",
            "range": "± 329711.04751467775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2035868.315234375,
            "unit": "ns",
            "range": "± 30681.137244546575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1322851.3419921875,
            "unit": "ns",
            "range": "± 16605.193728295406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2675573.0701069077,
            "unit": "ns",
            "range": "± 55559.702352957356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 862192.0249348958,
            "unit": "ns",
            "range": "± 10584.183259598829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762754.535063244,
            "unit": "ns",
            "range": "± 17441.514131843796"
          }
        ]
      }
    ]
  }
}