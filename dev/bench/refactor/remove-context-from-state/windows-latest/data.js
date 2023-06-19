window.BENCHMARK_DATA = {
  "lastUpdate": 1687177973999,
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
          "id": "35d08c7f409dc239ec327079abe362aef2ca70ee",
          "message": "Remove signer from account state delta; Accept IActionContext for Mint\nand Burn",
          "timestamp": "2023-06-19T21:18:01+09:00",
          "tree_id": "e6e0829644ff46bbc6e3cbe49450e33583d2395f",
          "url": "https://github.com/greymistcube/libplanet/commit/35d08c7f409dc239ec327079abe362aef2ca70ee"
        },
        "date": 1687177953484,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1404962,
            "unit": "ns",
            "range": "± 106710.91911602045"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2544297.6744186045,
            "unit": "ns",
            "range": "± 93691.77808205578"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1792062,
            "unit": "ns",
            "range": "± 170914.95686688184"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4651434.146341464,
            "unit": "ns",
            "range": "± 152473.40523802192"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44972.34042553192,
            "unit": "ns",
            "range": "± 4359.204925418059"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6962992.307692308,
            "unit": "ns",
            "range": "± 53090.24489079046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17613085.714285713,
            "unit": "ns",
            "range": "± 124298.40556649803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44575840,
            "unit": "ns",
            "range": "± 777246.4040260519"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91044593.33333333,
            "unit": "ns",
            "range": "± 1196389.115790073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 183743233.33333334,
            "unit": "ns",
            "range": "± 1160066.7620361133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4766840.0390625,
            "unit": "ns",
            "range": "± 8797.738527909058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1515928.9713541667,
            "unit": "ns",
            "range": "± 2611.1387184999985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1178019.9869791667,
            "unit": "ns",
            "range": "± 1758.4876860320921"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2597843.8020833335,
            "unit": "ns",
            "range": "± 24470.776083246903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 807628.125,
            "unit": "ns",
            "range": "± 3764.686860342765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 739771.6438802084,
            "unit": "ns",
            "range": "± 1470.4230725439259"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3057176.086956522,
            "unit": "ns",
            "range": "± 75125.91985454883"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3202563.888888889,
            "unit": "ns",
            "range": "± 95423.62436682852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4027764.5161290322,
            "unit": "ns",
            "range": "± 120641.29350651348"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3432909.6153846155,
            "unit": "ns",
            "range": "± 140228.84414149943"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5848070,
            "unit": "ns",
            "range": "± 114453.28442552217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 251578.68852459016,
            "unit": "ns",
            "range": "± 10820.44538137715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 240757.14285714287,
            "unit": "ns",
            "range": "± 9559.550198623363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213130.35714285713,
            "unit": "ns",
            "range": "± 9113.70435897814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3826635.714285714,
            "unit": "ns",
            "range": "± 40143.791686747914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3438833.3333333335,
            "unit": "ns",
            "range": "± 62981.81899413134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17806.060606060608,
            "unit": "ns",
            "range": "± 1860.0426910735023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81760.21505376344,
            "unit": "ns",
            "range": "± 6079.8694884616925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67433.70786516854,
            "unit": "ns",
            "range": "± 3735.8503906018727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89329.89690721649,
            "unit": "ns",
            "range": "± 12531.968827666085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4762.886597938144,
            "unit": "ns",
            "range": "± 951.2403731038127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18082.474226804123,
            "unit": "ns",
            "range": "± 2114.878360828267"
          }
        ]
      }
    ]
  }
}