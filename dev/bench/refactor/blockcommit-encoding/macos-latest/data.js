window.BENCHMARK_DATA = {
  "lastUpdate": 1678864636253,
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
      },
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
          "id": "1d18531e11f75250a447b2a0c2e7b7b5296c3ff1",
          "message": "Changelog",
          "timestamp": "2023-03-15T15:58:48+09:00",
          "tree_id": "f1a76ecc24619636b246c8f654731b40b288d6fe",
          "url": "https://github.com/greymistcube/libplanet/commit/1d18531e11f75250a447b2a0c2e7b7b5296c3ff1"
        },
        "date": 1678864605616,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8911430.07142857,
            "unit": "ns",
            "range": "± 135899.62422343716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 24225467.35714286,
            "unit": "ns",
            "range": "± 201066.14843785085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 58577164,
            "unit": "ns",
            "range": "± 1344421.033167326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 116564714.92857143,
            "unit": "ns",
            "range": "± 1333991.0155371372"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 235283523,
            "unit": "ns",
            "range": "± 1932419.6940293834"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74005.82978723405,
            "unit": "ns",
            "range": "± 7055.7886303745345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 241484.24,
            "unit": "ns",
            "range": "± 9196.530001792935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 243899.86764705883,
            "unit": "ns",
            "range": "± 11654.900181295101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 203732.8829787234,
            "unit": "ns",
            "range": "± 12667.72869531025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13162233.714285715,
            "unit": "ns",
            "range": "± 303351.40568821214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10765605.4,
            "unit": "ns",
            "range": "± 93218.7812336426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21083.07608695652,
            "unit": "ns",
            "range": "± 1728.4556864673223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63766.63829787234,
            "unit": "ns",
            "range": "± 5526.853138061504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48035.13736263736,
            "unit": "ns",
            "range": "± 3218.9357955575715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127096.02061855671,
            "unit": "ns",
            "range": "± 16227.958912898968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6134.780219780219,
            "unit": "ns",
            "range": "± 527.8952505984455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21356.12222222222,
            "unit": "ns",
            "range": "± 1893.781769208972"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1770802.7419354839,
            "unit": "ns",
            "range": "± 129531.11151538436"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3279843.6078431373,
            "unit": "ns",
            "range": "± 132784.3334870614"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2789640.0476190476,
            "unit": "ns",
            "range": "± 149231.30039590597"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7318199.355263158,
            "unit": "ns",
            "range": "± 368110.2718939785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3929208.25,
            "unit": "ns",
            "range": "± 72129.76702444005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6267645.166666667,
            "unit": "ns",
            "range": "± 162888.81505511043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27950960.666666668,
            "unit": "ns",
            "range": "± 376409.3692781583"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7579924.137254902,
            "unit": "ns",
            "range": "± 284650.383981123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32111944.55,
            "unit": "ns",
            "range": "± 719952.4798948795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7235933.984375,
            "unit": "ns",
            "range": "± 49894.4595790865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2192595.7734375,
            "unit": "ns",
            "range": "± 11172.211509364326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1457507.6526041667,
            "unit": "ns",
            "range": "± 4031.4623646473633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3090118.3359375,
            "unit": "ns",
            "range": "± 20372.1201955047"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 937618.5333984375,
            "unit": "ns",
            "range": "± 4752.033436158206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 850313.5552455357,
            "unit": "ns",
            "range": "± 6078.359272710178"
          }
        ]
      }
    ]
  }
}