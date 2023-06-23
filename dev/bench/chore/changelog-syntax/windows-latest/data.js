window.BENCHMARK_DATA = {
  "lastUpdate": 1687485421402,
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
          "id": "3aa3fe04eaa69b761d67132bbf7deeb088933887",
          "message": "[skip changelog] Removed json syntax highlighting in changelog",
          "timestamp": "2023-06-23T10:36:25+09:00",
          "tree_id": "dafc5cd1a5223a958bec45a046ad1b6e60f13267",
          "url": "https://github.com/greymistcube/libplanet/commit/3aa3fe04eaa69b761d67132bbf7deeb088933887"
        },
        "date": 1687485388766,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1683341.237113402,
            "unit": "ns",
            "range": "± 144047.79136957848"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3223100,
            "unit": "ns",
            "range": "± 160518.34722087238"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2638778.313253012,
            "unit": "ns",
            "range": "± 140283.2187938706"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6584683.870967742,
            "unit": "ns",
            "range": "± 391508.8189051492"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56371.27659574468,
            "unit": "ns",
            "range": "± 4281.508686473681"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9201576.829268293,
            "unit": "ns",
            "range": "± 327659.2483239182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24747166.666666668,
            "unit": "ns",
            "range": "± 279084.3591529442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63722754,
            "unit": "ns",
            "range": "± 2560947.5151974354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124463438.46153846,
            "unit": "ns",
            "range": "± 1380432.0854587895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 253147012.12121212,
            "unit": "ns",
            "range": "± 7720607.631072407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6063935.983455882,
            "unit": "ns",
            "range": "± 118761.60676485019"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1942954.55078125,
            "unit": "ns",
            "range": "± 29321.01289858944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1447338.4765625,
            "unit": "ns",
            "range": "± 17333.371966429924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3252510.3515625,
            "unit": "ns",
            "range": "± 36897.72669286759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1032624.8046875,
            "unit": "ns",
            "range": "± 19313.16758284581"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 935951.5690104166,
            "unit": "ns",
            "range": "± 15084.561033403355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4007387.1428571427,
            "unit": "ns",
            "range": "± 129084.65777910859"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4147208.510638298,
            "unit": "ns",
            "range": "± 161532.64016612223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5020834,
            "unit": "ns",
            "range": "± 128553.58376957058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5329376.470588235,
            "unit": "ns",
            "range": "± 78793.39700612423"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8239336.170212766,
            "unit": "ns",
            "range": "± 320354.98952794325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 322098.03921568627,
            "unit": "ns",
            "range": "± 13159.323541825066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 303036.170212766,
            "unit": "ns",
            "range": "± 11813.15452351677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 280195.8333333333,
            "unit": "ns",
            "range": "± 13803.433309389391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4936483.870967742,
            "unit": "ns",
            "range": "± 142689.78262130797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4453246.666666667,
            "unit": "ns",
            "range": "± 77766.07658013015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24540.860215053763,
            "unit": "ns",
            "range": "± 3097.0265037662157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104476.28865979382,
            "unit": "ns",
            "range": "± 8815.112180179041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94670.21276595745,
            "unit": "ns",
            "range": "± 9264.774075168876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119227.8350515464,
            "unit": "ns",
            "range": "± 18573.607744301466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6907.142857142857,
            "unit": "ns",
            "range": "± 1264.6869137026451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24231.25,
            "unit": "ns",
            "range": "± 2404.789628615097"
          }
        ]
      }
    ]
  }
}