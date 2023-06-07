window.BENCHMARK_DATA = {
  "lastUpdate": 1686130116342,
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
          "id": "2cb975586bfddbf420ba1e963e66498c7f97476f",
          "message": "Prepare 2.0.0",
          "timestamp": "2023-06-07T18:03:50+09:00",
          "tree_id": "5bd5641efe979f132445e954887ff30ee7a9025a",
          "url": "https://github.com/greymistcube/libplanet/commit/2cb975586bfddbf420ba1e963e66498c7f97476f"
        },
        "date": 1686130085618,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10392662.909090908,
            "unit": "ns",
            "range": "± 2755010.5404469064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22735220.604166668,
            "unit": "ns",
            "range": "± 1320189.4822672792"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63909971.80588235,
            "unit": "ns",
            "range": "± 15417580.202892786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115840469.6746988,
            "unit": "ns",
            "range": "± 6122873.042850727"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238112453.2222222,
            "unit": "ns",
            "range": "± 5063745.919189244"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 86616.52272727272,
            "unit": "ns",
            "range": "± 8509.895806833107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 405445.3510638298,
            "unit": "ns",
            "range": "± 59349.334005549805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 392788.3645833333,
            "unit": "ns",
            "range": "± 80792.88683073918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 349656.1666666667,
            "unit": "ns",
            "range": "± 34114.714968493085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4821206.707865168,
            "unit": "ns",
            "range": "± 807847.4331817804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3944391.38372093,
            "unit": "ns",
            "range": "± 304645.29338805185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26177.542553191488,
            "unit": "ns",
            "range": "± 5374.237033451181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113228.6888888889,
            "unit": "ns",
            "range": "± 15036.608319379638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 121389.6264367816,
            "unit": "ns",
            "range": "± 15553.803055324694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118944.39130434782,
            "unit": "ns",
            "range": "± 19170.218970102607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7205.375,
            "unit": "ns",
            "range": "± 1234.3452920475697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20934.397849462366,
            "unit": "ns",
            "range": "± 4286.119832719345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1752133.4945054946,
            "unit": "ns",
            "range": "± 200201.3716573265"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3382318.522727273,
            "unit": "ns",
            "range": "± 363555.9052225124"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2899489.6049382715,
            "unit": "ns",
            "range": "± 420606.15875087585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13491939.418367347,
            "unit": "ns",
            "range": "± 5950696.196965138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3793550.533333333,
            "unit": "ns",
            "range": "± 400101.14330171054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3993650.33,
            "unit": "ns",
            "range": "± 446523.5637020434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4963378.804347826,
            "unit": "ns",
            "range": "± 399968.50989059644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4997579.6632653065,
            "unit": "ns",
            "range": "± 530971.6370912865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9035215.107526882,
            "unit": "ns",
            "range": "± 936131.786926653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6729372.667648566,
            "unit": "ns",
            "range": "± 297804.1910734237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2056835.0784505208,
            "unit": "ns",
            "range": "± 25069.97071369927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1305761.2020089286,
            "unit": "ns",
            "range": "± 15903.192299000313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2954415.4346875,
            "unit": "ns",
            "range": "± 66412.76267057438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 919453.3662806919,
            "unit": "ns",
            "range": "± 13288.715053074206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 790982.322265625,
            "unit": "ns",
            "range": "± 9941.136123170456"
          }
        ]
      }
    ]
  }
}