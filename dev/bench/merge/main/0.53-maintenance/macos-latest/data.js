window.BENCHMARK_DATA = {
  "lastUpdate": 1680491698134,
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
          "id": "db57324e9925a094741d779a02c06a62b19bd4a0",
          "message": "Fix changelog",
          "timestamp": "2023-04-03T11:49:34+09:00",
          "tree_id": "118aa78362a7cfe4036b7151188443d5543a9b30",
          "url": "https://github.com/greymistcube/libplanet/commit/db57324e9925a094741d779a02c06a62b19bd4a0"
        },
        "date": 1680491677636,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9554720.93939394,
            "unit": "ns",
            "range": "± 670950.260991702"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22089132.766666666,
            "unit": "ns",
            "range": "± 1088092.0435826778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58384515.807228915,
            "unit": "ns",
            "range": "± 3105037.58773518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120455000.63043478,
            "unit": "ns",
            "range": "± 7312119.886398055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230285986.88271606,
            "unit": "ns",
            "range": "± 11770736.514929717"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 82215.64285714286,
            "unit": "ns",
            "range": "± 9542.398667201529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 465113.62903225806,
            "unit": "ns",
            "range": "± 50893.95292285328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 396802.1649484536,
            "unit": "ns",
            "range": "± 63890.417970876835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 365377.13186813187,
            "unit": "ns",
            "range": "± 38502.52908438001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6455859.381443299,
            "unit": "ns",
            "range": "± 548504.5824765362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4634830.146464647,
            "unit": "ns",
            "range": "± 421234.5101317616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26030.603092783505,
            "unit": "ns",
            "range": "± 5385.786261626787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 127880.26086956522,
            "unit": "ns",
            "range": "± 24321.309046685503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 148617.21739130435,
            "unit": "ns",
            "range": "± 22565.138199514993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 316335.88,
            "unit": "ns",
            "range": "± 41951.96712843213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 12113.005376344086,
            "unit": "ns",
            "range": "± 1741.2624706857398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28834.767441860466,
            "unit": "ns",
            "range": "± 4618.973999708844"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1724167.8775510204,
            "unit": "ns",
            "range": "± 185827.2544840579"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3168714.230769231,
            "unit": "ns",
            "range": "± 128575.65636156964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2574305.827586207,
            "unit": "ns",
            "range": "± 136920.9464420481"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7181890.603773585,
            "unit": "ns",
            "range": "± 296870.25704015885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3783553.791208791,
            "unit": "ns",
            "range": "± 373383.42058013583"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3935229.663265306,
            "unit": "ns",
            "range": "± 375219.8962612222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5635749.155555556,
            "unit": "ns",
            "range": "± 1097778.862008682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5399630.806122449,
            "unit": "ns",
            "range": "± 585087.4635897877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10248167.652631579,
            "unit": "ns",
            "range": "± 912845.3914069628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7309780.944883241,
            "unit": "ns",
            "range": "± 394965.9726903657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2217775.646875,
            "unit": "ns",
            "range": "± 39349.523365662324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1370928.5576171875,
            "unit": "ns",
            "range": "± 30190.16568240859"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2887807.449909249,
            "unit": "ns",
            "range": "± 221725.20247229768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1001802.3502308239,
            "unit": "ns",
            "range": "± 45981.88120947791"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 863200.9384765625,
            "unit": "ns",
            "range": "± 53480.27672109856"
          }
        ]
      }
    ]
  }
}