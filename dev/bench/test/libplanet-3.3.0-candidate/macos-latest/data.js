window.BENCHMARK_DATA = {
  "lastUpdate": 1694478077639,
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
          "id": "4c727b97eb46a893a810b8db3570fa3ca521d994",
          "message": "Logging for trie set count",
          "timestamp": "2023-09-12T09:05:30+09:00",
          "tree_id": "c99165fc6bcea0ce8fc7832bb6306319b8b19f85",
          "url": "https://github.com/greymistcube/libplanet/commit/4c727b97eb46a893a810b8db3570fa3ca521d994"
        },
        "date": 1694478062155,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7883834,
            "unit": "ns",
            "range": "± 94829.72383774434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19398361.6,
            "unit": "ns",
            "range": "± 338394.0534923323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46658367.11764706,
            "unit": "ns",
            "range": "± 918571.7304098984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91444050.53846154,
            "unit": "ns",
            "range": "± 830288.9068566852"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 189472884.85714287,
            "unit": "ns",
            "range": "± 1520368.483615826"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53593.010869565216,
            "unit": "ns",
            "range": "± 5910.141528761425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 303332.2021276596,
            "unit": "ns",
            "range": "± 21746.19806720384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 292161.47826086957,
            "unit": "ns",
            "range": "± 18570.26574012507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 290908.8360655738,
            "unit": "ns",
            "range": "± 13110.487739694416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4171561.285714286,
            "unit": "ns",
            "range": "± 116484.71467165797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3690979.6,
            "unit": "ns",
            "range": "± 95096.50425050684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18142.922222222223,
            "unit": "ns",
            "range": "± 1401.6988567070612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83545.26595744681,
            "unit": "ns",
            "range": "± 7378.348049479554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80724.90322580645,
            "unit": "ns",
            "range": "± 9085.579172111533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89359.36734693877,
            "unit": "ns",
            "range": "± 13748.703312532285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5338.5053763440865,
            "unit": "ns",
            "range": "± 678.0824725980564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17359.31868131868,
            "unit": "ns",
            "range": "± 1556.3776097015993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1525300.1041666667,
            "unit": "ns",
            "range": "± 222711.73538774424"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2711717.947761194,
            "unit": "ns",
            "range": "± 127041.80163658416"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1891583.193877551,
            "unit": "ns",
            "range": "± 181785.41437417036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5055021.775,
            "unit": "ns",
            "range": "± 168982.74811694006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3052968.625,
            "unit": "ns",
            "range": "± 56478.44016717058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3132863.125,
            "unit": "ns",
            "range": "± 95349.76075100657"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4359754.346153846,
            "unit": "ns",
            "range": "± 148649.38430299642"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3727246.6739130435,
            "unit": "ns",
            "range": "± 134603.2475283159"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6620387.489795919,
            "unit": "ns",
            "range": "± 260920.85550021377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5081445.378645834,
            "unit": "ns",
            "range": "± 48985.28269225281"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1810648.1828125,
            "unit": "ns",
            "range": "± 29484.72072715409"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1002287.51640625,
            "unit": "ns",
            "range": "± 10327.679540339008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2436250.874739583,
            "unit": "ns",
            "range": "± 12425.759328665847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 769456.3376302083,
            "unit": "ns",
            "range": "± 9666.71835310805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 805704.5587239583,
            "unit": "ns",
            "range": "± 5599.554114190007"
          }
        ]
      }
    ]
  }
}