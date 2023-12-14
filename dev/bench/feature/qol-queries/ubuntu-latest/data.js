window.BENCHMARK_DATA = {
  "lastUpdate": 1702517527991,
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
          "id": "e8396a4c123eca45891de7a292befa11b49e186e",
          "message": "Added HelperQuery",
          "timestamp": "2023-12-14T10:21:08+09:00",
          "tree_id": "3b228ebd7e37b79a77a996183e1fef4220da9d13",
          "url": "https://github.com/greymistcube/libplanet/commit/e8396a4c123eca45891de7a292befa11b49e186e"
        },
        "date": 1702517521849,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201466.85714285713,
            "unit": "ns",
            "range": "± 11283.937919372562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194610.85185185185,
            "unit": "ns",
            "range": "± 8041.400521985987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166863.22641509434,
            "unit": "ns",
            "range": "± 6826.517018333471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3044787.4285714286,
            "unit": "ns",
            "range": "± 33106.52795659278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2846573.4,
            "unit": "ns",
            "range": "± 33749.62642502242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15394.697916666666,
            "unit": "ns",
            "range": "± 3123.529131303384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66354.36559139784,
            "unit": "ns",
            "range": "± 7007.70562028274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67024.06060606061,
            "unit": "ns",
            "range": "± 15903.051853062274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63632.97422680412,
            "unit": "ns",
            "range": "± 12969.182064363184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5081.994845360825,
            "unit": "ns",
            "range": "± 1566.3162071914635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11651.570588235294,
            "unit": "ns",
            "range": "± 920.6394877402091"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38557.197916666664,
            "unit": "ns",
            "range": "± 5028.370135896378"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 938658.6888888889,
            "unit": "ns",
            "range": "± 69673.674900079"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1917267.1860465116,
            "unit": "ns",
            "range": "± 103115.94838070983"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1402272.8695652173,
            "unit": "ns",
            "range": "± 110394.59719994833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5670507.4375,
            "unit": "ns",
            "range": "± 110790.11571253021"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2419165.2592592593,
            "unit": "ns",
            "range": "± 51419.23985958847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2458729.14516129,
            "unit": "ns",
            "range": "± 110950.31073026573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3138715.6296296297,
            "unit": "ns",
            "range": "± 84403.91062355973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2999317.3606557376,
            "unit": "ns",
            "range": "± 134107.41661009812"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6912244.631578947,
            "unit": "ns",
            "range": "± 136678.63930614377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5783598.285714285,
            "unit": "ns",
            "range": "± 87345.47499016902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14445378.5,
            "unit": "ns",
            "range": "± 165195.87282245109"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36460023,
            "unit": "ns",
            "range": "± 351472.5853300246"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75802264.92857143,
            "unit": "ns",
            "range": "± 383564.4402065897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150578814.5,
            "unit": "ns",
            "range": "± 1126092.0682478473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3664847.0770089286,
            "unit": "ns",
            "range": "± 32461.01094282692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1215408.6990559895,
            "unit": "ns",
            "range": "± 2012.9677342845143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 776471.6299479167,
            "unit": "ns",
            "range": "± 10861.545138547679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1958009.1354166667,
            "unit": "ns",
            "range": "± 3156.1411634121137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 605106.5184151785,
            "unit": "ns",
            "range": "± 993.6449888369667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580926.1092998798,
            "unit": "ns",
            "range": "± 4247.178731719508"
          }
        ]
      }
    ]
  }
}