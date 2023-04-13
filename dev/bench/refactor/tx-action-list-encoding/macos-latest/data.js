window.BENCHMARK_DATA = {
  "lastUpdate": 1681367304977,
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
          "id": "51dfc21a6b04ab2184fbfaa40eb26a9dae87de92",
          "message": "Fixed tests",
          "timestamp": "2023-04-13T15:02:17+09:00",
          "tree_id": "e43cc05b11d1f369aa309d83d657bf0db17a5cc8",
          "url": "https://github.com/greymistcube/libplanet/commit/51dfc21a6b04ab2184fbfaa40eb26a9dae87de92"
        },
        "date": 1681367285758,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9076125.52,
            "unit": "ns",
            "range": "± 807197.1699162652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21197316.13402062,
            "unit": "ns",
            "range": "± 1224231.9811955628"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54959941.5,
            "unit": "ns",
            "range": "± 3925730.3041793634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118821999.34210527,
            "unit": "ns",
            "range": "± 2575175.5429597255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224871835.75510204,
            "unit": "ns",
            "range": "± 17219364.682723302"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69184.15625,
            "unit": "ns",
            "range": "± 10439.038021144856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 417625.3043478261,
            "unit": "ns",
            "range": "± 47644.62379959837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 367121,
            "unit": "ns",
            "range": "± 56022.806658129564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 316769.44086021505,
            "unit": "ns",
            "range": "± 31829.825293699665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6010068.521276596,
            "unit": "ns",
            "range": "± 574514.4976355558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3914104.9,
            "unit": "ns",
            "range": "± 288366.0305829354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21430.10989010989,
            "unit": "ns",
            "range": "± 3889.263170577714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114896.40449438202,
            "unit": "ns",
            "range": "± 18904.242115749807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 124096.05434782608,
            "unit": "ns",
            "range": "± 15797.597291481608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 160211.875,
            "unit": "ns",
            "range": "± 31367.262805687278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10963.544444444444,
            "unit": "ns",
            "range": "± 1178.812570621039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25806.505617977527,
            "unit": "ns",
            "range": "± 2638.3921589913757"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1672622.03125,
            "unit": "ns",
            "range": "± 174836.2046520567"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3054384.6461538463,
            "unit": "ns",
            "range": "± 142408.50982576393"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2757729.21875,
            "unit": "ns",
            "range": "± 317216.32462506695"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7353922.457894737,
            "unit": "ns",
            "range": "± 473649.42438665195"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3434625.7731958763,
            "unit": "ns",
            "range": "± 230448.6373029838"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5026050.157303371,
            "unit": "ns",
            "range": "± 2325002.0082184817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5751588.9655172415,
            "unit": "ns",
            "range": "± 766483.662604944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5290978.640449438,
            "unit": "ns",
            "range": "± 746285.0877085543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9201682.405263158,
            "unit": "ns",
            "range": "± 837690.759697488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8037289.561948529,
            "unit": "ns",
            "range": "± 1098341.7198219078"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2149439.1061523436,
            "unit": "ns",
            "range": "± 75962.56443179847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1358003.8319905598,
            "unit": "ns",
            "range": "± 52933.85703605704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2920726.02328125,
            "unit": "ns",
            "range": "± 282019.24611787876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 955401.3858753551,
            "unit": "ns",
            "range": "± 35302.85702586124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 843130.50227529,
            "unit": "ns",
            "range": "± 55745.353601821495"
          }
        ]
      }
    ]
  }
}