window.BENCHMARK_DATA = {
  "lastUpdate": 1678861275511,
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
          "id": "957935b3c131a2bd3b40a0af0c79827c262cca80",
          "message": "Changelog",
          "timestamp": "2023-03-15T15:05:02+09:00",
          "tree_id": "ca9f0634fd837ee89a922165df92d7cf9c503206",
          "url": "https://github.com/greymistcube/libplanet/commit/957935b3c131a2bd3b40a0af0c79827c262cca80"
        },
        "date": 1678861259582,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8544629.91935484,
            "unit": "ns",
            "range": "± 258782.2833477045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21989406.133333333,
            "unit": "ns",
            "range": "± 192656.25496681413"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 54251486.35714286,
            "unit": "ns",
            "range": "± 1286758.0766413042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 106638233.1923077,
            "unit": "ns",
            "range": "± 423269.9234327083"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 219865308.35714287,
            "unit": "ns",
            "range": "± 1131480.3287933404"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68992.12886597938,
            "unit": "ns",
            "range": "± 10931.841127831945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 208959.02105263158,
            "unit": "ns",
            "range": "± 13536.420815300988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 213706.72340425532,
            "unit": "ns",
            "range": "± 12599.739058062843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 200372.20212765958,
            "unit": "ns",
            "range": "± 16016.165303318434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12594978.28,
            "unit": "ns",
            "range": "± 333859.63023858296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10304023.433333334,
            "unit": "ns",
            "range": "± 121946.064773657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24943.387096774193,
            "unit": "ns",
            "range": "± 2178.2535237535462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63362.43548387097,
            "unit": "ns",
            "range": "± 5805.142279660058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58910.17021276596,
            "unit": "ns",
            "range": "± 5319.8881984337195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125201.63157894737,
            "unit": "ns",
            "range": "± 15670.986424337116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7857.336956521739,
            "unit": "ns",
            "range": "± 834.8157035172418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21460.725274725275,
            "unit": "ns",
            "range": "± 2666.355215420206"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1683805.7577319588,
            "unit": "ns",
            "range": "± 252777.79123447693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2892035.4054054054,
            "unit": "ns",
            "range": "± 140018.2269100665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2578689.62,
            "unit": "ns",
            "range": "± 225390.22501272874"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6526633.896907217,
            "unit": "ns",
            "range": "± 405884.7595323005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3382715.2195121953,
            "unit": "ns",
            "range": "± 86182.12943920339"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5316498.833333333,
            "unit": "ns",
            "range": "± 121691.85229724024"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24831233.17857143,
            "unit": "ns",
            "range": "± 1053014.9429439108"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6596448,
            "unit": "ns",
            "range": "± 187307.44752065706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28832443.666666668,
            "unit": "ns",
            "range": "± 744211.9343849086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6943522.459077381,
            "unit": "ns",
            "range": "± 156532.85425831476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1933066.0245535714,
            "unit": "ns",
            "range": "± 7929.769557818838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1305243.1010416667,
            "unit": "ns",
            "range": "± 23791.770482860902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2715170.812943892,
            "unit": "ns",
            "range": "± 101704.14904512701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 807897.4672851562,
            "unit": "ns",
            "range": "± 1958.2423914861645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 733590.1084735577,
            "unit": "ns",
            "range": "± 5341.955196998316"
          }
        ]
      }
    ]
  }
}