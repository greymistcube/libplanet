window.BENCHMARK_DATA = {
  "lastUpdate": 1691655458635,
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
          "id": "c4a3c54845f711796891067c0a6f57d1d81718d2",
          "message": "Release 3.2.0",
          "timestamp": "2023-08-10T17:00:18+09:00",
          "tree_id": "1371cd3f03bb4071f0170747f91bc7ad2a1abe94",
          "url": "https://github.com/greymistcube/libplanet/commit/c4a3c54845f711796891067c0a6f57d1d81718d2"
        },
        "date": 1691655445067,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8258010.333333333,
            "unit": "ns",
            "range": "± 170500.99024828876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20877478.38,
            "unit": "ns",
            "range": "± 807661.136999637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52086652.78571428,
            "unit": "ns",
            "range": "± 598952.5644035632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108237433.9375,
            "unit": "ns",
            "range": "± 2104834.30914993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215103960.52941176,
            "unit": "ns",
            "range": "± 4297665.786132676"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66552.52747252748,
            "unit": "ns",
            "range": "± 6564.654032249206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325100.9784946237,
            "unit": "ns",
            "range": "± 26086.12280753825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 319297.0625,
            "unit": "ns",
            "range": "± 35508.25433252698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 328675.7931034483,
            "unit": "ns",
            "range": "± 35064.411043020606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4210493.136363637,
            "unit": "ns",
            "range": "± 101135.02096998629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3978734.7,
            "unit": "ns",
            "range": "± 138477.8384360028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20973.7311827957,
            "unit": "ns",
            "range": "± 2594.955093604013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102124.25789473685,
            "unit": "ns",
            "range": "± 14491.729362989196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97567.50505050505,
            "unit": "ns",
            "range": "± 9517.387304805248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94500.57608695653,
            "unit": "ns",
            "range": "± 9199.01274831151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6572.241935483871,
            "unit": "ns",
            "range": "± 894.1624439424209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17630.6091954023,
            "unit": "ns",
            "range": "± 2400.8785424774023"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1539228.7736842106,
            "unit": "ns",
            "range": "± 157610.64046334155"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2838678.619402985,
            "unit": "ns",
            "range": "± 132876.6553599698"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1913121.99,
            "unit": "ns",
            "range": "± 138552.54920790883"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5476925.810344827,
            "unit": "ns",
            "range": "± 235752.85382665205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3443593.0454545454,
            "unit": "ns",
            "range": "± 236988.73672512925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3563817.9891304346,
            "unit": "ns",
            "range": "± 261110.5417443173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4600216.479591837,
            "unit": "ns",
            "range": "± 277794.32040579244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4000376.551020408,
            "unit": "ns",
            "range": "± 319158.6175287991"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7266587.992957747,
            "unit": "ns",
            "range": "± 354056.42280101846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6310154.985329861,
            "unit": "ns",
            "range": "± 239354.14065857138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1702684.236421131,
            "unit": "ns",
            "range": "± 39726.52966740949"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1062857.26171875,
            "unit": "ns",
            "range": "± 20819.308806810554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2689838.3307291665,
            "unit": "ns",
            "range": "± 35590.66145515132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836087.5804966518,
            "unit": "ns",
            "range": "± 7289.230172770281"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770626.1852463942,
            "unit": "ns",
            "range": "± 5749.7481968690045"
          }
        ]
      }
    ]
  }
}