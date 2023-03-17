window.BENCHMARK_DATA = {
  "lastUpdate": 1679031801147,
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
          "id": "c10340be1d1cf8d232366c9d043a037d5cbd069b",
          "message": "Implemented IBencodable for ValidatorSet",
          "timestamp": "2023-03-17T12:04:50+09:00",
          "tree_id": "3a3a70c1894955d5d610a7a0355f6131318e3cc3",
          "url": "https://github.com/greymistcube/libplanet/commit/c10340be1d1cf8d232366c9d043a037d5cbd069b"
        },
        "date": 1679023224710,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3326631.1,
            "unit": "ns",
            "range": "± 69649.17558578096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5287046,
            "unit": "ns",
            "range": "± 110063.74678072597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25209874.96153846,
            "unit": "ns",
            "range": "± 687660.9697336897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6456966.185185186,
            "unit": "ns",
            "range": "± 175444.22573373723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27925356.866666667,
            "unit": "ns",
            "range": "± 502980.5795299324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7786353.133333334,
            "unit": "ns",
            "range": "± 45218.5962107037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21608687,
            "unit": "ns",
            "range": "± 265642.2171942125"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 53916419.6,
            "unit": "ns",
            "range": "± 759277.6108352502"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 107715800.94736843,
            "unit": "ns",
            "range": "± 2249331.120696908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 212633258.4,
            "unit": "ns",
            "range": "± 2073931.6352179227"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1410574.711111111,
            "unit": "ns",
            "range": "± 78489.20882963543"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2612694.411764706,
            "unit": "ns",
            "range": "± 53524.740090516585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2220012.2083333335,
            "unit": "ns",
            "range": "± 87282.4353178777"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5706018.6,
            "unit": "ns",
            "range": "± 325665.3416774029"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47190.633802816905,
            "unit": "ns",
            "range": "± 2232.6301225200523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5908152.014583333,
            "unit": "ns",
            "range": "± 34830.05476501559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1851600.8530970982,
            "unit": "ns",
            "range": "± 4411.757926635931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1368118.6970052083,
            "unit": "ns",
            "range": "± 5655.040046701628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2609719.4140625,
            "unit": "ns",
            "range": "± 4843.092920619713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824135.2820963542,
            "unit": "ns",
            "range": "± 950.6958072844262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760145.3223307292,
            "unit": "ns",
            "range": "± 1141.8204651799915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202874.3023255814,
            "unit": "ns",
            "range": "± 7117.899671936685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199812.19512195123,
            "unit": "ns",
            "range": "± 7210.5227904067815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165516.2857142857,
            "unit": "ns",
            "range": "± 2791.15557619948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11988740.368421054,
            "unit": "ns",
            "range": "± 264198.17343956255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9690922.357142856,
            "unit": "ns",
            "range": "± 110911.84563677112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20824.90322580645,
            "unit": "ns",
            "range": "± 1461.8018219375417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56299.425531914894,
            "unit": "ns",
            "range": "± 4061.6433124562623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40139.30434782609,
            "unit": "ns",
            "range": "± 960.9860671954997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99212.08163265306,
            "unit": "ns",
            "range": "± 15631.779101886472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5537.936842105263,
            "unit": "ns",
            "range": "± 647.7561895304651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19705.381443298967,
            "unit": "ns",
            "range": "± 2037.538887375828"
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
          "id": "88b208f5677505a93ee6443893ead8f429e2938f",
          "message": "Changelog",
          "timestamp": "2023-03-17T12:12:58+09:00",
          "tree_id": "697b033482d68942b8e7772b9738ace272559a25",
          "url": "https://github.com/greymistcube/libplanet/commit/88b208f5677505a93ee6443893ead8f429e2938f"
        },
        "date": 1679023818806,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3882251.3295454546,
            "unit": "ns",
            "range": "± 212826.0767628299"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5976350.364583333,
            "unit": "ns",
            "range": "± 343591.4726137521"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 28934994.145454545,
            "unit": "ns",
            "range": "± 1226315.7119203368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7333643.650793651,
            "unit": "ns",
            "range": "± 335109.20257601724"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32642692.359375,
            "unit": "ns",
            "range": "± 1505319.2330396425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9000631.559322033,
            "unit": "ns",
            "range": "± 392656.1760177801"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 24789208.291666668,
            "unit": "ns",
            "range": "± 971039.62394703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 62121710.282608695,
            "unit": "ns",
            "range": "± 2368374.2149692937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 127206569.12903225,
            "unit": "ns",
            "range": "± 3848965.351911132"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 251895339.3478261,
            "unit": "ns",
            "range": "± 6215110.837457041"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1590655.5421686748,
            "unit": "ns",
            "range": "± 81641.65562088718"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3271680.91,
            "unit": "ns",
            "range": "± 211883.88994013568"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2616967.230769231,
            "unit": "ns",
            "range": "± 134809.34281121916"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6576098.62,
            "unit": "ns",
            "range": "± 435074.02758009266"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56244.56043956044,
            "unit": "ns",
            "range": "± 3054.132825492519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6958767.801215278,
            "unit": "ns",
            "range": "± 144832.54909011265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2165104.5125,
            "unit": "ns",
            "range": "± 49221.909167836675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1581835.1336669922,
            "unit": "ns",
            "range": "± 29085.36960503007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3094481.562760417,
            "unit": "ns",
            "range": "± 30086.371732638625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 960811.1900390625,
            "unit": "ns",
            "range": "± 16640.48136114034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 882781.3677083333,
            "unit": "ns",
            "range": "± 11602.453384315639"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 219251.38775510204,
            "unit": "ns",
            "range": "± 16475.763461579267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 227326.69072164947,
            "unit": "ns",
            "range": "± 14302.68925715314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 192173.2142857143,
            "unit": "ns",
            "range": "± 18163.134779990003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13795368.12,
            "unit": "ns",
            "range": "± 552559.6078256853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11156069.952380951,
            "unit": "ns",
            "range": "± 407614.681280391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22607.33695652174,
            "unit": "ns",
            "range": "± 1657.4736586650952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64982.19387755102,
            "unit": "ns",
            "range": "± 7611.314435513146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47430.70114942529,
            "unit": "ns",
            "range": "± 3956.342776537921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111147.10416666667,
            "unit": "ns",
            "range": "± 15722.346319125169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6107.836956521739,
            "unit": "ns",
            "range": "± 644.1347425277532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23465.40860215054,
            "unit": "ns",
            "range": "± 2199.5518428740015"
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
          "id": "fe5bd82966d31515920323e8c4f638cc8331dada",
          "message": "Changelog",
          "timestamp": "2023-03-17T14:28:50+09:00",
          "tree_id": "697b033482d68942b8e7772b9738ace272559a25",
          "url": "https://github.com/greymistcube/libplanet/commit/fe5bd82966d31515920323e8c4f638cc8331dada"
        },
        "date": 1679031794316,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3706031.736842105,
            "unit": "ns",
            "range": "± 80965.9294572189"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5801598.214285715,
            "unit": "ns",
            "range": "± 47636.60503013101"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26089599.9375,
            "unit": "ns",
            "range": "± 479618.6664911293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6886312.076923077,
            "unit": "ns",
            "range": "± 59379.50247695122"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29347667.466666665,
            "unit": "ns",
            "range": "± 389296.6135654822"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8832426,
            "unit": "ns",
            "range": "± 119804.15966305773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 22666732.85714286,
            "unit": "ns",
            "range": "± 209842.013199622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 56778938.86666667,
            "unit": "ns",
            "range": "± 311638.17337369826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 113577223.85714285,
            "unit": "ns",
            "range": "± 387729.63055138884"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 225211099.64285713,
            "unit": "ns",
            "range": "± 737910.9987335461"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1509344.8421052631,
            "unit": "ns",
            "range": "± 85446.10418335702"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2811587.4545454546,
            "unit": "ns",
            "range": "± 88379.42661371017"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2400264.077777778,
            "unit": "ns",
            "range": "± 124306.76704190168"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5585204.884615385,
            "unit": "ns",
            "range": "± 147737.51191551235"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56442.98936170213,
            "unit": "ns",
            "range": "± 5952.367490488225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6190156.15234375,
            "unit": "ns",
            "range": "± 35014.66351490418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1948293.7526041667,
            "unit": "ns",
            "range": "± 1655.6826114733947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1371422.1315104167,
            "unit": "ns",
            "range": "± 3420.928286022997"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2661112.028125,
            "unit": "ns",
            "range": "± 10642.254987599537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832786.8413411458,
            "unit": "ns",
            "range": "± 293.13643005606264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 784808.0697544643,
            "unit": "ns",
            "range": "± 328.3564028548699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 212024.156626506,
            "unit": "ns",
            "range": "± 10848.286093116081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 216197.49019607843,
            "unit": "ns",
            "range": "± 8206.044836271732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 190303.671875,
            "unit": "ns",
            "range": "± 8760.83667464651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12617509.785714285,
            "unit": "ns",
            "range": "± 188436.90404245237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10193826.92857143,
            "unit": "ns",
            "range": "± 111815.67200494563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25895.926315789475,
            "unit": "ns",
            "range": "± 2104.934517817624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64878.166666666664,
            "unit": "ns",
            "range": "± 5204.258339047993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50215.02105263158,
            "unit": "ns",
            "range": "± 4034.4178756416336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116590.16326530612,
            "unit": "ns",
            "range": "± 16085.195586166637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7994.896907216495,
            "unit": "ns",
            "range": "± 978.7868712141413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24256.447916666668,
            "unit": "ns",
            "range": "± 2344.2914488729366"
          }
        ]
      }
    ]
  }
}